// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/utils/Strings.sol";

contract easy{

    address payable Powner;
    address owner;

    uint result;

    event ADD(uint indexed add, address indexed by);
    event LESS(uint indexed less, address indexed by);

    constructor (){
        owner = address(msg.sender);
        Powner = payable(owner);
        result = 0;
    }

    function add (uint n) public{
        require(msg.sender == owner, "Vous n'etes pas le proprietaire du smart contract");
        result = result + n;
        emit ADD(n, msg.sender);
    }

    function less(uint n) public payable{
        /****************************************************************************/ 
        /*Unit 	    |   wei value   |	wei                         |   ether value */
        /*--------------------------------------------------------------------------*/
        /*wei 	    |   1 wei 	    |   1 	                        |   10^-18 ETH  */
        /*kwei 	    |   10^3 wei 	|   1,000 	                    |   10^-15 ETH  */
        /*mwei 	    |   10^6 wei 	|   1,000,000 	                |   10^-12 ETH  */
        /*gwei 	    |   10^9 wei 	|   1,000,000,000 	            |   10^-9 ETH   */
        /*microether| 	10^12 wei 	|   1,000,000,000,000 	        |   10^-6 ETH   */
        /*milliether| 	10^15 wei 	|   1,000,000,000,000,000 	    |   10^-3 ETH   */
        /*ether 	|   10^18 wei 	|   1,000,000,000,000,000,000 	|   1 ETH       */
        /****************************************************************************/
       require(msg.value == 1000000000000000 && msg.sender != owner, "Vous n'etes pas le proprietaire du smart contract, le montant d'ether envoye n'est pas 0.001 ");
       emit LESS(n, msg.sender);
       result = result - n;
       //require(owner.send(msg.value));
       Powner.transfer(msg.value);
    }

    function view_result_uint() public view returns (uint){

        require(msg.sender == owner,"Vous n'etes pas le proprietaire du smart contract");
        return result;
    }

    function view_result_string() public view returns (uint,string memory){

        string memory str;
        str = Strings.toString(result);

        return (result,str);
    }

}

