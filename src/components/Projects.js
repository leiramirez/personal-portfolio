import React from 'react'
import './Projects.css'
import Card from './Card'

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="projects__container">
        <div className="projects__wrapper">
          <ul className="projects__cards">
            <Card 
              label='Data Science'
              src='images/lumads.png'
              alt='Event detection model'
              title='A Time Series Analysis of the Red-tagging of Lumad Groups on Twitter'
              date='February-June 2023'
              desc='A data science project that utilizes linear regression and event detection models in Python to analyze the spread of mis/disinformation about Lumad groups on Twitter'
              link='https://layadp.github.io/Red-Tagging-of-Lumad-Groups/'
              link_text='View the project website here'
            />
            <Card 
              label='Software Development'
              src='images/home-bound.png'
              alt='Dining area of the virtual home'
              title='Home Bound: Virtual Home for Reminiscence Therapy of Dementia Patients'
              date='September 2022-June 2023'
              desc='A virtual reality home that incorporates reminiscence therapy to manage symptoms of dementia and implemented on Oculus Quest 2 using Unity.'
              link='https://github.com/S3-Dementia-VR/home-bound'
              link_text='View the project repository here'
            />
            <Card 
              label='Web Development'
              src='images/petbios.PNG'
              alt='Dashboard of the petbios'
              title='petbios'
              date='September 2022-January 2023'
              desc='A pet health management web application made using Bubble.io and Airtable for veterinary clinics and pet owners to aid in keeping track of pets’ medical records and important schedules'
              link='https://petbios.bubbleapps.io/version-test'
              link_text='View the prototype here'
            />
            <Card 
              label='Web Development'
              src='images/paws-connect.PNG'
              alt='Landing page of Paws Connect'
              title='Paws Connect'
              date='April 2022'
              desc='A mock webpage made using Vue.js that connects pet owners to the nearest pet services and upcoming events in the local pet community.'
              link='https://paws-connect.surge.sh/'
              link_text='View the webpage here'
            />
            <Card 
              label='Web Development'
              src='images/iskool.PNG'
              alt='Login page of Iskool'
              title='Iskool'
              date='February 2022-May 2022'
              desc='A web-based tutoring marketplace application made using HTML, CSS, JavaScript, MySQL, and PHP, following the Agile software development process.'
              link='https://github.com/cs192-Iskool/Iskool'
              link_text='View the project repository here'
            />
            <Card 
              label='Operating Systems'
              src='images/file-server.PNG'
              alt='File server commands'
              title='File Server'
              date='January 2022'
              desc='A file server implemented using a multi-threaded program in C that accepts commands for reading, writing, and emptying files, and is able to execute these commands concurrently.'
            />
            <Card 
              label='Machine Learning'
              src='images/mailsweeper.PNG'
              alt='Decision tree confusion matrix'
              title='MailSweeper'
              date='May-June 2022'
              desc='An application made using Python that uses the decision tree and neural network models to identify spam mails based on attached images which are being used in order to avoid detection by text-based spam filters.'
              link='https://github.com/CS180-Any-Name/MailSweeper'
              link_text='View the project repository here'
            />
            <Card 
              label='Software Development'
              src='images/wordle.PNG'
              alt='Interface of the Wordle Clone'
              title='Wordle Clone'
              date='February 2022'
              desc='An application that implements a simplified version of the Wordle game made using the Beeware library and Toga toolkit in Python.'
            />
            <Card 
              label='Software Development'
              src='images/appbeat.PNG'
              alt='Home screen of AppBeat'
              title='AppBeat'
              date='February 2022'
              desc='A rhythm memory game made using the Pyglet library in Python where players are tasked to remember a sequence of arrows.'
              link='https://drive.google.com/file/d/1fvYFtWzfKzgDM_c9PWpCs0GK41uSWVHC/view?usp=sharing'
              link_text='View the project demo here'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects