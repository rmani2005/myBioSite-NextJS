pipeline {
agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '35'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('manikandanravi9')
    HOME = '.'
  } 
  stages {
  	stage('PreCond') {
            agent {
                docker {
                    image 'node:14'
                }	
            }
            
            steps {
                sh 'node -v'
               // sh 'npm install'
            }
        }
    stage('Killing the docker images & Containers'){
      steps{
	      sh 'echo "XXXXXXXXXXXX Stopping the running containers XXXXXXXXXXXXXXXXXXXXXXXXx"'
        sh 'docker container stop $(docker ps -a -q -f status=running)'
      }
    }
    stage('Build the docker images'){ 
      step{
	      sh 'echo "XXXXXXXXXXXXBuilding block started XXXXXXXXXXXXXXXXXXXXXXXXx"'
        sh 'docker build -t manikandanravi9/mybiositenextjs:latest -t manikandanravi9/mybiositenextjs:latest .'
        sh 'echo "XXXXXXXXXXXXBuilding block Completed XXXXXXXXXXXXXXXXXXXXXXXXx"'
      }
    }
    stage('Login to DockerHub') {
      steps {
       sh 'echo "XXXXXXXXXXXXDocker hub loginstarted XXXXXXXXXXXXXXXXXXXXXXXXx"'
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push the built docker image') {
      steps {
        sh 'echo "XXXXXXXXXXXXPushing the Docker hub image block started XXXXXXXXXXXXXXXXXXXXXXXXx"'
        sh 'docker image push manikandanravi9/mybiositenextjs:latest'
      }
    }
    stage('Run in local host of the local machine or Ec2 instance ') {
      steps {
        sh 'echo "XXXXXXXXXXXXPushing the Docker hub image block started XXXXXXXXXXXXXXXXXXXXXXXXx"'
        sh 'docker run -d -p 80:3000 manikandanravi9/mybiositenextjs:latest'
      }
    }
   stage('Starting Next job') 
   {
            steps 
            {
  				      build job: "TestAutomationFramework", wait: false   
            }            
            post 
            {
              success 
              {
              echo 'Successfully!'
              } 
              failure {
                  echo 'Failed!'
              }
              unstable {
                  echo 'This will run only if the run was marked as unstable'
              }
              changed {
                  echo 'This will run only if the state of the Pipeline has changed'
                  echo 'For example, if the Pipeline was previously failing but is now successful'
              }
           }   
        }
  }
}		 
		 
