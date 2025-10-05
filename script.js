async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            document.getElementById('account').innerText = `Connected: ${account}`;
            
            const web3 = new Web3(window.ethereum);
            const message = "Verify your address for Base/Guild";
            const signature = await web3.eth.personal.sign(message, account, '');
            
            document.getElementById('signedMessage').innerText = `Signature: ${signature}`;
        } catch (error) {
            console.error("Error:", error);
            document.getElementById('account').innerText = `Error: ${error.message}`;
        }
    } else {
        document.getElementById('account').innerText = "Please install MetaMask";
    }
}