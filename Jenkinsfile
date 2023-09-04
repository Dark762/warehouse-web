/* groovylint-disable NestedBlockDepth */
pipeline {
    agent any
    options {
        skipDefaultCheckout true
    }
    environment {
        MYHOME = 'Chennai'
        SERVER = ''
        GIT_SOLUTION = 'https://github.com/Dark762/warehouse-web.git'
        GIT_BRANCH = 'main'
        GIT_SOLUTION_CREDENTIALS = credentials('warehouse-github')
    }
    stages {
        stage('Checkout') {
            agent {
                    docker {
                        image 'node:latest'
                    }
            }
            steps {
                script {
                    try {
                        script {
                            git branch: env.GIT_BRANCH, credentialsId: env.GIT_SOLUTION_CREDENTIALS, url: env.GIT_SOLUTION
                        }
                    } catch (Exception e) {
                        echo 'Exception occurred: ' + e.toString()
                        echo err.getMessage()
                        sh 'Handle the exception!'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                agent {
                    docker {
                        image 'node:latest'
                    }
                }

                sh 'ls'

                sh 'docker pull jenkins/jenkins:lts-jdk11'
                sh 'docker run --name jenkins-container -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts-jdk11'
            }
        }
    }
}
