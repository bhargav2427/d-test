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
      }
    }
    stage("deployment"){
      steps{
        echo "build deployment"
      }
    }
  }
}
