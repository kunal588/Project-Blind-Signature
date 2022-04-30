# BLIND SIGNATURE USING RSA For Secured Voting System

## Introduction

### RSA Algorithm in Cryptography

RSA algorithm is an asymmetric cryptography algorithm. Asymmetric actually means that it works on two different keys i.e. Public Key and Private Key. As the name describes, the Public Key is given to everyone and the Private key is kept private.
An example of asymmetric cryptography :
A client (for example browser) sends its public key to the server and requests for some data.
The server encrypts the data using the client's public key and sends the encrypted data.
Client receives this data and decrypts it.
Since this is asymmetric, nobody else except the browser can decrypt the data even if a third party has the public key of the browser. The idea of RSA is based on the fact that it is difficult to factorise a large integer. The public key consists of two numbers where one number is multiplication of two large prime numbers. And private keys are also derived from the same two prime numbers. So if somebody can factorise the large number, the private key is compromised. Therefore encryption strength totally lies on the key size and if we double or triple the key size, the strength of encryption increases exponentially. RSA keys can be typically 1024 or 2048 bits long, but experts believe that 1024 bit keys could be broken in the near future. But till now it seems to be an infeasible task.

### Team Members :-

Pradeep Sharma, MEC, 19135131  
Bharat Bansal, EEE, 19085103  
Kunal Lodha, MEC, 19135130  
Madhav Jhunjhunwala, MEC, 19135139

### Role of each member in the project:

We worked as a team to complete the job, and each of us contributed equally.
Project completion is achieved by going through and building every component of it.
Our project entails
Learning about Blind Signature using RSA
Implementing the algorithm
Creating the user interface
Deploying on the server
