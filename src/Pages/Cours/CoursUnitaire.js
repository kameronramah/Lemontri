import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {collection, getDocs, query, where, updateDoc, setDoc, arrayUnion} from "firebase/firestore";
import {db} from "../../firebase/firebase";
import Unauthorize from "../../img/unauthorize.png";
import './style/Cours.css';
import { auth } from "../../firebase/firebase";

const CoursUnitaire = () => {
    const [lesson, setLesson] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [done, setDone] = useState(false);
    let { id } = useParams();

    useEffect(() => {
        checkUser();
    }, [auth.currentUser]);

    useEffect(() => {
        getLesson().then((lesson) => {
            setLesson(lesson);
            isDone().then((done) => {
                setDone(done);
            });
        });
    }, [lesson]);

    const checkUser = () => {
        if(auth.currentUser !== null && auth.currentUser.emailVerified !== false) {
            setIsConnected(true);
        }
        else {
            setIsConnected(false);
        }
    }

    const getLesson = async () => {
        let lesson = null;
        const q = query(collection(db, "lessons"), where("routeTitle", "==", id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            lesson = doc.data();
        });
        return lesson;
    }

    const getRanks = async () => {
        let ranks = [];
        const q = query(collection(db, "ranks"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            ranks.push(doc.data());
        });
        return ranks;
    }

    const isRead = async () => {
        let q = query(collection(db,'users'), where('email', '==', auth.currentUser.email));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                getRanks().then((ranks) => {
                    let rankUser = doc.data().rank;
                    ranks.every((rank) => {
                        if(doc.data().xp + 50 >= rank.xpMini) {
                            rankUser = rank.id;
                            return false;
                        }
                    })
                    updateDoc(doc.ref, {
                        cours: arrayUnion(lesson.routeTitle),
                        xp: doc.data().xp + 50,
                        rank: rankUser
                    })
                });
            })
        }
    }

    const isDone = async () => {
        let done = null;
        const q = query(collection(db, "users"), where("email", "==", auth.currentUser.email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let user = doc.data();
            if(user.cours !== undefined && user.cours.includes(lesson.routeTitle)) {
                done = true;
            }
            else {
                done = false;
            }
        });
        return done;
    }

    return (
        <>
            {lesson !== null &&
                <div className={'text-center'} style={{color: lesson.color}}>
                    <Container onClick={() => console.log(auth.currentUser)} fluid className={'text-center p-4 position-fixed header-lesson'} style={{backgroundColor: lesson.color}}>
                        <h1 className={'text-white'}>{lesson.title}</h1>
                        <img className={'img-lesson position-fixed'} src={require(`../../img/${lesson.icon}`)} alt={"logo"}/>
                    </Container>
                    <Container className={'authorize-lesson'}>
                        <img src={require(`../../img/cours/${lesson.authorizeItems}`)} alt={"authorize-items"}/>
                    </Container>
                    <Container fluid className={'unauthorize-lesson text-center'} style={{border: `10px solid ${lesson.color}`}}>
                        <img className={'unauthorize-img'} src={Unauthorize} alt={"unauthorize-logo"}/>
                        <h1 className={'unauthorize-title'} style={{color: lesson.color, borderBottom: `6px solid ${lesson.color}`}}>INTERDITS</h1>
                        <Row className={'justify-content-center'}>
                            {lesson.unauthorizedItems.map((item, index) => {
                                return (
                                    <h1 className={'unauthorize-item'} key={index} style={{color: lesson.color}}>{item},</h1>
                                )
                            })}
                            <h1 className={'unauthorize-item'} style={{color: lesson.color}}>ETC.</h1>
                        </Row>
                    </Container>
                    <h1 style={{color: lesson.color}}>UNE QUESTION ? RENDEZ-VOUS SUR LEMONTRI.FR</h1>
                    {isConnected === true && done === false &&
                        <button className={'btn btn-success btn-lesson'} onClick={() => isRead()}>J'AI LU CE COURS</button>
                    }
                    {isConnected === true && done === true &&
                        <h1>COURS VALIDE</h1>
                    }
                </div>
            }
        </>
    )
}

export default CoursUnitaire;