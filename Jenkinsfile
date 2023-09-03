pipeline {
    agent { any }
    stages {
        stage('Test') {
            steps {
                sh 'docker pull jenkins/jenkins:lts-jdk11'
                sh 'docker run --name jenkins-container -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts-jdk11'
            }
        }
    }
}