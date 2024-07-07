import { ethers } from 'ethers';

document.addEventListener('DOMContentLoaded', async () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');

        // Connect to MetaMask
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // Replace with your contract's ABI and Address
        const contractABI = [
            [
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_studentName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_subject",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_grade",
                            "type": "uint256"
                        }
                    ],
                    "name": "addGrade",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_subject",
                            "type": "string"
                        }
                    ],
                    "name": "averageGrade",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "index",
                            "type": "uint256"
                        }
                    ],
                    "name": "getGrade",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "grades",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "studentName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "subject",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "grade",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "index",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_grade",
                            "type": "uint256"
                        }
                    ],
                    "name": "updateGrade",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }
            ]
        ];
        const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4';

        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Example function to call a contract method
        async function getContractData() {
            const data = await contract.yourContractMethod();
            console.log(data);
            document.getElementById('result').innerText = data;
        }

        // Add event listeners or call functions
        document.getElementById('getData').addEventListener('click', getContractData);
    } else {
        console.log('MetaMask is not installed');
    }
});
