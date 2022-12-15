import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase/firebase";
import './style/Cours.css';

const CoursUnitaire = () => {
    const [lesson, setLesson] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        getLesson().then(lesson => {
            setLesson(lesson)
        });
    }, [setLesson]);

    const getLesson = async () => {
        let lesson = null;
        const q = query(collection(db, "lessons"), where("routeTitle", "==", id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            lesson = doc.data();
        });
        return lesson;
    }

    return (
        <div>
            {lesson !== null &&
                <div className={'text-center'} style={{color: lesson.color}}>
                    <Container fluid className={'text-center p-4 position-fixed header-lesson'} style={{backgroundColor: lesson.color}}>
                        <h1 className={'text-white'}>{lesson.title}</h1>
                        <img className={'img-lesson position-fixed'} src={require(`../../img/${lesson.icon}`)}/>
                    </Container>
                    <Container className={'authorize-lesson'}>
                        <img src={require(`../../img/cours/${lesson.authorizeItems}`)}/>
                    </Container>
                    <Container fluid className={'unauthorize-lesson'} style={{border: `6px solid ${lesson.color}`}}>
                        <h1 style={{color: lesson.color, borderBottom: `6px solid ${lesson.color}`}}>INTERDITS</h1>
                    </Container>
                </div>
            }
        </div>
    )
}

export default CoursUnitaire;