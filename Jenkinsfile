pipeline {
    agent none
    options {
        skipDefaultCheckout true
    }
    environment {
        GIT_SOLUTION = 'https://github.com/Dark762/warehouse-web.git'
        GIT_BRANCH = 'main'
        GIT_SOLUTION_CREDENTIALS = credentials('warehouse-github')
    }
    stages {
        stage('Checkout') {
            agent any
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

                echo "hello"
                sh "ls -a"
            }
        }
        stage('docker build'){
            agent {
                dockerfile {
                    filename 'dockerfile'
                }
            }
            steps{
                script{
                    try {
                        docker.withServer("tcp://192.168.18.130:4243","dockerAuth"){
                            docker.build("warehouse","dockerfile")
                        }
                    }
                    catch (Exception e) {
                        echo 'Exception occurred: ' + e.toString()
                        echo err.getMessage()
                        sh 'Handle the exception!'
                    }
                   
                }
            }
        }
    }
}
