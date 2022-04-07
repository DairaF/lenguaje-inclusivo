import React, { useState, useCallback, useEffect } from 'react';
 
import Situacion from '../components/Situacion';
import Start from '../components/Start';
import End from '../components/End';
import tweets from '../data/tweets.json';
import notas from '../data/notas.json';
import papers from '../data/papers.json';
import hablados from '../data/hablados.json';
import ReactGa from 'react-ga'
import "animate.css/animate.min.css";
import DocumentMeta from 'react-document-meta';

import { AnimationOnScroll } from 'react-animation-on-scroll';
function Quiz() {

  const meta = {
    title: 'Descubrí tu propio lenguaje inclusivo',
    description: 'Un experimento para poner en cuestión cómo hablamos',
    canonical: 'https://lenguajeinclusivo.fund.ar/quiz',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'lenguaje,inclusividad'
      }
    }
  };


    useEffect(()=>{
      ReactGa.initialize('G-BQYF4G0HMV')
      ReactGa.pageview(window.location.pathname + window.location.search)
      },[])
      
  const [randomTweet, setRandomTweet] = useState(0);
  const [randomNota, setRandomNota] = useState(0);
  const [randomPaper, setRandomPaper] = useState(0);
  const [randomSpeak, setRandomSpeak] = useState(0);
  const [realize, setRealize] = useState(0);
  const [answer1, setAnswer1] = useState(1);
  const [answer2, setAnswer2] = useState(1);
  const [answer3, setAnswer3] = useState(1);
  const [pushArray, setPushArray] = useState([]);
  const [page,setPage]=useState(0);
  const handleAnswers = () => {
    setPushArray(pushArray => [...pushArray,answer1] );
    setPushArray(pushArray => [...pushArray,answer2] );
    setPushArray(pushArray => [...pushArray,answer3] );
    nextSituatcion();
  };
  const setRandomValues = () => {
    setRandomTweet( Math.floor(Math.random()*(3))) ;
    setRandomNota( Math.floor(Math.random()*(3))) ;
    setRandomPaper( Math.floor(Math.random()*(3))) ;
    setRandomSpeak( Math.floor(Math.random()*(3))) ;
  }
  const handleRealize = useCallback(() =>{
    setRealize(realize+1);
  })
  const handleAnswer1=useCallback((answer)=>{
    setAnswer1(answer);
  },[answer1])
  const handleAnswer2=useCallback((answer)=>{
    setAnswer2(answer);
  },[answer2])
  const handleAnswer3=useCallback((answer)=>{
    setAnswer3(answer);
  },[answer3])

const nextSituatcion = () =>{
  setPage(page+1);
  setRandomValues();
}
  return (
    
    <DocumentMeta {...meta}>
    <div className="App">
      {page === 0 && <AnimationOnScroll animateIn="animate__slideInLeft" animateOut="animate__slideOutDown"><Start handleStart={nextSituatcion} /></AnimationOnScroll>}
      {page === 1 && <AnimationOnScroll animateIn="animate__slideInUp" animateOut="animate__slideOutRight" ><Situacion 
                      key = {1}
                      handleRealize={handleRealize}
                      handleAnswers={handleAnswers}
                      handleAnswer1={handleAnswer1}
                      handleAnswer2={handleAnswer2}
                      handleAnswer3={handleAnswer3}
                      situation="tweets"
                      block1={tweets[randomTweet].block1} 
                      opciones1={tweets[randomTweet].opciones1} 
                      block2={tweets[randomTweet].block2}
                      opciones2={tweets[randomTweet].opciones2}
                      block3={tweets[randomTweet].block3}
                      opciones3={tweets[randomTweet].opciones3}
                      block4={tweets[randomTweet].block4}
                      step="1"
                      /></AnimationOnScroll>
      }
      {page === 2 && <AnimationOnScroll animateIn="animate__slideInRight" ><Situacion 
                      key = {2}
                      handleRealize={handleRealize}
                      handleAnswers={handleAnswers}
                      handleAnswer1={handleAnswer1}
                      handleAnswer2={handleAnswer2}
                      handleAnswer3={handleAnswer3}
                      situation="notas"
                      block1={notas[randomNota].block1} 
                      opciones1={notas[randomNota].opciones1} 
                      block2={notas[randomNota].block2}
                      opciones2={notas[randomNota].opciones2}
                      block3={notas[randomNota].block3}
                      opciones3={notas[randomNota].opciones3}
                      block4={notas[randomNota].block4}
                      step="2"
                      /></AnimationOnScroll>}
      {page === 3 && <AnimationOnScroll animateIn="animate__slideInRight" ><Situacion  
                      key = {3}
                      handleRealize={handleRealize}
                      handleAnswers={handleAnswers}
                      handleAnswer1={handleAnswer1}
                      handleAnswer2={handleAnswer2}
                      handleAnswer3={handleAnswer3}
                      situation="papers"
                      block1={papers[randomPaper].block1} 
                      opciones1={papers[randomPaper].opciones1} 
                      block2={papers[randomPaper].block2}
                      opciones2={papers[randomPaper].opciones2}
                      block3={papers[randomPaper].block3}
                      opciones3={papers[randomPaper].opciones3}
                      block4={papers[randomPaper].block4}
                      step="3"
                      /></AnimationOnScroll>
      }
      {page === 4 && <AnimationOnScroll animateIn="animate__slideInRight" ><Situacion  
                      key = {4}
                      handleRealize={handleRealize}
                      handleAnswers={handleAnswers}
                      handleAnswer1={handleAnswer1}
                      handleAnswer2={handleAnswer2}
                      handleAnswer3={handleAnswer3}
                      situation="hablados"
                      block1={hablados[randomSpeak].block1} 
                      opciones1={hablados[randomSpeak].opciones1} 
                      block2={hablados[randomSpeak].block2}
                      opciones2={hablados[randomSpeak].opciones2}
                      block3={hablados[randomSpeak].block3}
                      opciones3={hablados[randomSpeak].opciones3}
                      block4={hablados[randomSpeak].block4}
                      step="4"
                      /></AnimationOnScroll>
        }
      
      {/* {
        data.map((dato, index)=>{
          return (
          page === (index+1) && <Situacion 
            key = {index}
            handleRealize={handleRealize}
            handleAnswers={handleAnswers}
            handleAnswer1={handleAnswer1}
            handleAnswer2={handleAnswer2}
            handleAnswer3={handleAnswer3}
            situation="tweet"
            block1={dato.block1} 
            opciones1={dato.opciones1} 
            block2={dato.block2}
            opciones2={dato.opciones2}
            block3={dato.block3}
            opciones3={dato.opciones3}
            block4={dato.block4}
            /> 
          )
        }
        )
      }              */}

      {page === 5 && <End fullArray={pushArray} realize={realize} /> }

    </div>
    </DocumentMeta>
  );
}

export default Quiz;
