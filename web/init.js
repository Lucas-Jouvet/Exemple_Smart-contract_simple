var account;
var web3js;
//button
const new_contract = document.querySelector('.new_contract');
const go = document.querySelector('.go');
const add = document.querySelector('.add');
const less = document.querySelector('.less');

//id
//txStatus
//Etat_contrat


//input
contract_add = document.getElementById("contract_add");
add_nb = document.getElementById("add_nb");
less_nb = document.getElementById("less_nb");

//event button
new_contract.addEventListener('click', () => {
    new_Contract();
});
go.addEventListener('click', () => {
    VM = new web3js.eth.Contract(abi_source, contract_add.value);
    affiche_Etat();
});

add.addEventListener('click', () => {
    send_add();
});

less.addEventListener('click', () => {
    send_less();
});

//action
async function new_Contract(){
    getAccount();

    contract_add.value = "Déploiement en cours";
    const deployedContract = await new web3js.eth.Contract(abi_source)
      .deploy({
          data: compile
      })
      .send({
          from: account
      });

    console.log(
    `Contract deployed at address: ${deployedContract.options.address}`
    );
    contract_add.value = deployedContract.options.address;

    VM = new web3js.eth.Contract(abi_source, contract_add.value);
}

function send_add() {
    getAccount();
    $("#txStatus").text("Information add en cours d'envoi ...");
    
    VM.methods.add(add_nb.value)
        .send({ from: account })
    .on("receipt", function(receipt) {
        $("#txStatus").text("Information add anvoyé avec succès!");
        affiche_Etat();
    })
    .on("error", function(error) {
        $("#txStatus").text(error);
    });
    
    
}

function send_less() {
    getAccount();
    $("#txStatus").text("Informations less en cours d'envoi ...");
    
    VM.methods.less(less_nb.value)
        .send({ from: account, value:web3js.utils.toWei("1000000000000000", "wei") })
    .on("receipt", function(receipt) {
        $("#txStatus").text("Information less anvoyé avec succès!");
        affiche_Etat();
    })
    .on("error", function(error) {
        $("#txStatus").text(error);
    });

    
    
}

function affiche_Etat() {
    getAccount();

    VM.methods.view_result_uint().call({ from: account }).then((result) => {
    $("#Etat_contrat_uint").text("Valeur retour uint : "+result);
    }).catch(function(err){
    console.log('err...\n'+err);
    });   
    VM.methods.view_result_string().call({ from: account }).then((result) => {
    $("#Etat_contrat_tuple").text("Valeur retour tuple : uint("+result[0]+") , string("+result[1]+")");
    }).catch(function(err){
    console.log('err...\n'+err);
    });   
}

//intial
function startApp() {
    getAccount();
    console.log("compte : "+account);
}

async function getAccount() {
    const accounts = await ethereum.enable();
    account = accounts[0];
    //affiche_Etat();
}

window.addEventListener('load', function() {
    if (typeof ethereum !== 'undefined') {
    ethereum.enable()
        .catch(console.error)
    web3js = new Web3(window['ethereum']);
    }
    else {
    alert("Vous devez installer metamask et vous connecter au réseau ropsten : https://metamask.io/")
    }

    startApp()

});
	