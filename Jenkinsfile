pipeline {
  agent any
  stages {
    stage("build"){
      steps{
        nodejs('nodejs'){
        sh 'npm install'
          
        }
      }
    }
    stage("test"){
      steps{
        echo "build test"
        nodejs('nodejs'){
//         sh 'node app/server.js'  
        }
      }
    }
    stage("deployment"){
      steps{
        echo "build deployment"
      }
    }
  }
  post {
    always{
      echo "i will execute always"
    }
    failure {
      echo "get failed"
    }
    success {
      echo "get success"
    }
  }
}
