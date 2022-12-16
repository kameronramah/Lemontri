import React, { useEffect, useState} from 'react';
import {auth, db} from "../../firebase/firebase";
import {collection, getDocs, query, where} from "firebase/firestore";
import {useNavigate} from "react-router-dom";
import './style/Profil.css';
import {Container, Row, Col} from "react-bootstrap";


const Profil = () => {
    const [user, setUser] = useState();
    const [company, setCompany] = useState(null);
    const [rank, setRank] = useState(null);
    const [nextRank, setNextRank] = useState(null);
    const [colorPercentage, setColorPercentage] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        if(user === null) {
            navigate('/');
        }
        else if(auth.currentUser !== null && auth.currentUser.emailVerified === false) {
            navigate('/accueil');
        }
        else {
            getUserInfos().then((user) => {
                getRank(user.rank).then((rank) => {
                    getNextRank(rank.id).then((rank) => {
                        setColorPercentage((user.xp / rank.xpMini) * 100);
                    });
                });
            });
        }
    }, [auth.currentUser, user]);

    useEffect(() => {
        getCompanyInfos();
    }, [user])

    const getUserInfos = async () => {
        let user;
        let q = query(collection(db,'users'), where('email', '==', auth.currentUser.email));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
                user = doc.data();
            })
        }
        return user;
    }

    const getCompanyInfos = async () => {
        let q = query(collection(db,'companies'), where('code', '==', user.code));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                setCompany(doc.data());
            })
        }
    }

    const getRank = async (rankId) => {
        let rank;
        let q = query(collection(db,'ranks'), where('id', '==', rankId));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                setRank(doc.data());
                rank = doc.data();
            })
        }
        return rank;
    }

    const getNextRank = async (actualRank) => {
        let rank;
        let nextRank = actualRank < 4 ? actualRank + 1 : 4;
        let q = query(collection(db,'ranks'), where('id', '==', nextRank));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                setNextRank(doc.data());
                rank = doc.data();
            })
        }
        return rank;
    }

    const logout = () => {
        auth.signOut();
        setUser(null);
    }

    return (
        <div className={'text-center mt-4'}>
            {user !== null && company !== null && rank !== null && nextRank !== null &&
                <>
                    <h1 className="m-b-0">{user.name}</h1>
                    <h1 className="m-b-0 title-yellow">{company.name}</h1>
                    <Container className={'mt-4 mb-5'}>
                        <Row>
                            <Col>
                                <h2 className={'title-yellow'}>RANG ACTUEL</h2>
                                <span onClick={() => console.log(colorPercentage)} className={'rank color-green'}>{rank.name}</span>
                            </Col>
                            <Col className={'my-auto'}>
                                <div className={'progressBar'}>
                                    <div className={'actualProgress'} style={{width: `${colorPercentage}%`}}>
                                    </div>
                                </div>
                                <span>{user.xp} / {nextRank.xpMini} XP</span>
                            </Col>
                        </Row>
                    </Container>
                    <button onClick={() => logout()} className={'btn btn-danger'}>SE DECONNECTER</button>
                </>
            }
        </div>
    )

}

export default Profil;