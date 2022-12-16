import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db} from "../../firebase/firebase";
import {Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style/Cours.css';

const Cours = () => {
    const [cours, setCours] = useState([]);

    useEffect(() => {
        getLessons().then(lessons => {
            setCours(lessons);
        });
    }, [setCours]);

    const getLessons = async () => {
        let lessons = [];
        const querySnapshot = await getDocs(collection(db, "lessons"));
        querySnapshot.forEach((doc) => {
            let lesson = doc.data();
            Object.assign(lesson, {id: doc.id});
            lessons.push(lesson);
        });
        return lessons;
    }

    return (
        <>
            <Container className={'container-lessons'}>
                <h1 className={'mb-5'}>LES ZESTES DU TRI</h1>
                <Row>
                    {cours.map((lesson) => {
                        return (
                            <Col key={lesson.id} className={'col-icon-lesson'}>
                                <Link to={`/cours/${lesson.routeTitle}`}>
                                    <img className="icon-lesson" src={require(`../../img/${lesson.icon}`)} alt={"icone"} />
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Cours;