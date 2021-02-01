/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Api3Pool } from "../Api3Pool";

export class Api3Pool__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(api3TokenAddress: string, overrides?: Overrides): Promise<Api3Pool> {
    return super.deploy(api3TokenAddress, overrides || {}) as Promise<Api3Pool>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(api3TokenAddress, overrides || {});
  }
  attach(address: string): Api3Pool {
    return super.attach(address) as Api3Pool;
  }
  connect(signer: Signer): Api3Pool__factory {
    return super.connect(signer) as Api3Pool__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Api3Pool {
    return new Contract(address, _abi, signerOrProvider) as Api3Pool;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "api3TokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimReleaseReferenceBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimReleases",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "releaseStart",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "releaseEnd",
        type: "uint256",
      },
    ],
    name: "depositWithVesting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "locks",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "makeClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "payoutAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimReferenceBlock",
        type: "uint256",
      },
    ],
    name: "payOutClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimReferenceBlock",
        type: "uint256",
      },
    ],
    name: "releaseClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardEpochLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardPaidForEpoch",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardReleases",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardVestingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "scheduleUnstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeTarget",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "updateAndGetBalanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateCoeff",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "timelockContractAddress",
        type: "address",
      },
    ],
    name: "updateTimelockStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetBlock",
        type: "uint256",
      },
    ],
    name: "updateUserState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userToDepositorToTimelock",
    outputs: [
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "releaseStart",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "releaseEnd",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "unstaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "locked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastStateUpdateTargetBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeScheduledAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052622503f660809081525062093a8060a090815250622625a060085563047868c06009556a084595161401484a000000600a55620f4240600b55600854600f5534801561004f57600080fd5b506040516133843803806133848339818101604052602081101561007257600080fd5b81019080805190602001909291905050508080808080600260405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600360405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050505060805160a0516131c26101c260003980610e4752806114da528061151e528061158e52806119565280612c18525080611d8352806126855280612e8552506131c26000f3fe608060405234801561001057600080fd5b50600436106101ef5760003560e01c806356d4a7fe1161010f578063ca093047116100a2578063eebb198011610071578063eebb198014610900578063f3fef3a314610949578063f45346dc14610997578063f4dadc6114610a05576101ef565b8063ca093047146107b1578063decac4f5146107f3578063e45bebc114610811578063ee677b361461089e576101ef565b8063784b3c5d116100de578063784b3c5d146106d357806392093b36146106f1578063a694fc3a1461070f578063a87430ba1461073d576101ef565b806356d4a7fe1461057557806358780938146105f757806362bc78551461063957806370a082311461067b576101ef565b806320a0a0e91161018757806339a288bd1161015657806339a288bd146104a757806341cb8c20146104f05780634eb05c47146105395780634f322ae814610557576101ef565b806320a0a0e9146103ed5780632dd5090c1461040b5780632def66201461044f5780632eebce2c14610459576101ef565b80631077f06c116101c35780631077f06c1461030657806313f2dad01461033457806314e288871461037d578063168a5a93146103b5576101ef565b806201e862146101f4578063054fbb841461025657806310664413146102ba578063106d08df146102d8575b600080fd5b6102406004803603604081101561020a57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a4e565b6040518082815260200191505060405180910390f35b6102b86004803603604081101561026c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b66565b005b6102c2610d33565b6040518082815260200191505060405180910390f35b610304600480360360208110156102ee57600080fd5b8101908080359060200190929190505050610d39565b005b6103326004803603602081101561031c57600080fd5b81019080803590602001909291905050506112fa565b005b6103606004803603602081101561034a57600080fd5b8101908080359060200190929190505050611353565b604051808381526020018281526020019250505060405180910390f35b6103b36004803603604081101561039357600080fd5b810190808035906020019092919080359060200190929190505050611384565b005b6103eb600480360360408110156103cb57600080fd5b810190808035906020019092919080359060200190929190505050611407565b005b6103f56114d8565b6040518082815260200191505060405180910390f35b6104376004803603602081101561042157600080fd5b81019080803590602001909291905050506114fc565b60405180821515815260200191505060405180910390f35b61045761151c565b005b6104a56004803603604081101561046f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611950565b005b6104d3600480360360208110156104bd57600080fd5b8101908080359060200190929190505050611eae565b604051808381526020018281526020019250505060405180910390f35b61051c6004803603602081101561050657600080fd5b8101908080359060200190929190505050611edf565b604051808381526020018281526020019250505060405180910390f35b610541611f10565b6040518082815260200191505060405180910390f35b61055f611f16565b6040518082815260200191505060405180910390f35b6105f5600480360360a081101561058b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050611f1c565b005b6106236004803603602081101561060d57600080fd5b8101908080359060200190929190505050612202565b6040518082815260200191505060405180910390f35b6106656004803603602081101561064f57600080fd5b8101908080359060200190929190505050612223565b6040518082815260200191505060405180910390f35b6106bd6004803603602081101561069157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061223b565b6040518082815260200191505060405180910390f35b6106db6122ed565b6040518082815260200191505060405180910390f35b6106f96122f3565b6040518082815260200191505060405180910390f35b61073b6004803603602081101561072557600080fd5b81019080803590602001909291905050506122f9565b005b61077f6004803603602081101561075357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612635565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b6107dd600480360360208110156107c757600080fd5b810190808035906020019092919050505061266b565b6040518082815260200191505060405180910390f35b6107fb612683565b6040518082815260200191505060405180910390f35b6108736004803603604081101561082757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506126a7565b6040518085815260200184815260200183815260200182815260200194505050505060405180910390f35b6108ea600480360360408110156108b457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506126e4565b6040518082815260200191505060405180910390f35b61092c6004803603602081101561091657600080fd5b81019080803590602001909291905050506127ad565b604051808381526020018281526020019250505060405180910390f35b6109956004803603604081101561095f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506127de565b005b610a03600480360360608110156109ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061299c565b005b610a3160048036036020811015610a1b57600080fd5b8101908080359060200190929190505050612adc565b604051808381526020018281526020019250505060405180910390f35b6000610a5861313c565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c00160405290816000820154815260200160018201805480602002602001604051908101604052809291908181526020016000905b82821015610b1757838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610ad1565b50505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152505090506000610b59826020015186612b0d565b9050809250505092915050565b6000601060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600081600301544210610bff5781600001549050610c3b565b8160020154421115610c3a576000826002015442039050600083600201548460030154039050808285600001540281610c3457fe5b04925050505b5b6000826001015483600001540390506000818303905080600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000828254039250508190555080846001015403601060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505050505050565b600b5481565b610d433343611950565b6000600360016003805490500381548110610d5a57fe5b90600052602060002090600202016001015490506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805490500381548110610e0457fe5b90600052602060002090600202016001015490506000600260016002805490500381548110610e2f57fe5b906000526020600020906002020160010154905060007f00000000000000000000000000000000000000000000000000000000000000004281610e6e57fe5b0490506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600601600083815260200190815260200160002060009054906101000a900460ff16158015610ef557506000600d60008481526020019081526020016000205414155b15611244576000610fc4600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b82821015610fa757838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610f61565b50505050600e600086815260200190815260200160002054612b0d565b905060006110506002805480602002602001604051908101604052809291908181526020016000905b8282101561103357838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610fed565b50505050600e600087815260200190815260200160002054612b0d565b90508082600d600087815260200190815260200160002054028161107057fe5b0492506000878487028161108057fe5b0490508681111561108f578690505b80870396508086039550600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101604051806040016040528043815260200189815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600260405180604001604052804381526020018881525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505083600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000828254039250508190555060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600601600087815260200190815260200160002060006101000a81548160ff0219169083151502179055505050505b6000838686028161125157fe5b04905081810187111561126357600080fd5b42600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004018190555086600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005018190555050505050505050565b600460405180604001604052804381526020018381525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505050565b6002818154811061136057fe5b90600052602060002090600202016000915090508060000154908060010154905082565b600660405180604001604052804381526020018481525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060078190806001815401808255809150506001900390600052602060002001600090919091909150555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561149857600080fd5b505af11580156114ac573d6000803e3d6000fd5b505050506040513d60208110156114c257600080fd5b8101908080519060200190929190505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600c6020528060005260406000206000915054906101000a900460ff1681565b7f0000000000000000000000000000000000000000000000000000000000000000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004015401421180156115f5575060027f000000000000000000000000000000000000000000000000000000000000000002600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401540142105b6115fe57600080fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050154905061164f3343611950565b600060026001600280549050038154811061166657fe5b9060005260206000209060020201600101549050600060036001600380549050038154811061169157fe5b90600052602060002090600202016001015490506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010180549050038154811061173b57fe5b90600052602060002090600202016001015490506000828585028161175c57fe5b0490508181111561177957819050838382028161177557fe5b0494505b84600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282540192505081905550600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016040518060400160405280438152602001838503815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600260405180604001604052804381526020018387038152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401819055506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501819055505050505050565b600c60007f0000000000000000000000000000000000000000000000000000000000000000428161197d57fe5b04815260200190815260200160002060009054906101000a900460ff166119a7576119a6612c0c565b5b6119af61313c565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c00160405290816000820154815260200160018201805480602002602001604051908101604052809291908181526020016000905b82821015611a6e57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190611a28565b50505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152505090506000611ab0826020015143612b0d565b90506000826040015190506000836060015190506000811415611ad257600190505b60606002805480602002602001604051908101604052809291908181526020016000905b82821015611b3c57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190611af6565b50505050905060006004805490501115611c975760606004805480602002602001604051908101604052809291908181526020016000905b82821015611bba57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190611b74565b505050509050600081600081518110611bcf57fe5b6020026020010151600001516001850310611bf9576001611bf38360018703612f9d565b01611bfc565b60005b90505b815181108015611c25575087828281518110611c1757fe5b602002602001015160000151105b15611c9457611c32613172565b828281518110611c3e57fe5b602002602001015190506000611c58858360000151612b0d565b90506000611c6e8a602001518460000151612b0d565b9050818184602001510281611c7f57fe5b04880197505050508080600101915050611bff565b50505b60006005805490501115611e175760606005805480602002602001604051908101604052809291908181526020016000905b82821015611d0f57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190611cc9565b505050509050600081600081518110611d2457fe5b6020026020010151600001516001850310611d4e576001611d488360018703612f9d565b01611d51565b60005b90505b815181108015611d7a575087828281518110611d6c57fe5b602002602001015160000151105b15611e145760007f0000000000000000000000000000000000000000000000000000000000000000838381518110611dae57fe5b6020026020010151600001510390506000611dc98583612b0d565b90506000611ddb8a6020015184612b0d565b90508181868681518110611deb57fe5b6020026020010151602001510281611dff57fe5b04880397505050508080600101915050611d54565b50505b82600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555085600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018190555050505050505050565b60058181548110611ebb57fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60038181548110611eec57fe5b90600052602060002090600202016000915090508060000154908060010154905082565b600a5481565b600f5481565b6000601060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015414611fa857600080fd5b83600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254019250508190555083600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008282540192505081905550604051806080016040528085815260200185815260200183815260200182815250601060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010155604082015181600201556060820151816003015590505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8630876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156121bf57600080fd5b505af11580156121d3573d6000803e3d6000fd5b505050506040513d60208110156121e957600080fd5b8101908080519060200190929190505050505050505050565b6007818154811061220f57fe5b906000526020600020016000915090505481565b600e6020528060005260406000206000915090505481565b60003073ffffffffffffffffffffffffffffffffffffffff166201e86243846040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b1580156122ab57600080fd5b505afa1580156122bf573d6000803e3d6000fd5b505050506040513d60208110156122d557600080fd5b81019080805190602001909291905050509050919050565b60085481565b60095481565b6123033343611950565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154101561235257600080fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254039250508190555060006002600160028054905003815481106123b957fe5b906000526020600020906002020160010154905060006003600160038054905003815481106123e457fe5b90600052602060002090600202016001015490506000818484028161240557fe5b04905061241061313c565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c00160405290816000820154815260200160018201805480602002602001604051908101604052809291908181526020016000905b828210156124cf57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190612489565b50505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152505090506000808260200151511161251657600061253b565b81602001516001836020015151038151811061252e57fe5b6020026020010151602001515b9050600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101604051806040016040528043815260200185840181525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060026040518060400160405280438152602001858801815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050505050505050565b60016020528060005260406000206000915090508060000154908060020154908060030154908060040154908060050154905085565b600d6020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b6010602052816000526040600020602052806000526040600020600091509150508060000154908060010154908060020154908060030154905084565b60006126f08383611950565b6127a5600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b8282101561279b57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190612755565b5050505083612b0d565b905092915050565b600681815481106127ba57fe5b90600052602060002090600202016000915090508060000154908060010154905082565b6127e83343611950565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015403101561287b57600080fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254039250508190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561295c57600080fd5b505af1158015612970573d6000803e3d6000fd5b505050506040513d602081101561298657600080fd5b8101908080519060200190929190505050505050565b81600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254019250508190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8430856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015612a9b57600080fd5b505af1158015612aaf573d6000803e3d6000fd5b505050506040513d6020811015612ac557600080fd5b810190808051906020019092919050505050505050565b60048181548110612ae957fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60008083511415612b215760009050612c06565b82600184510381518110612b3157fe5b6020026020010151600001518210612b665782600184510381518110612b5357fe5b6020026020010151602001519050612c06565b82600081518110612b7357fe5b602002602001015160000151821015612b8f5760009050612c06565b600080600185510390505b81811115612be9576000600260018484010181612bb357fe5b04905084868281518110612bc357fe5b60200260200101516000015111612bdc57809250612be3565b6001810391505b50612b9a565b848281518110612bf557fe5b602002602001015160200151925050505b92915050565b612c14613033565b60007f00000000000000000000000000000000000000000000000000000000000000004281612c3f57fe5b0490506000600360016003805490500381548110612c5957fe5b906000526020600020906002020160010154905060006305f5e1006034600f54840281612c8257fe5b0481612c8a57fe5b0490506001600c600085815260200190815260200160002060006101000a81548160ff02191690831515021790555043600e60008581526020019081526020016000208190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bbb30c5d306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015612d5857600080fd5b505afa158015612d6c573d6000803e3d6000fd5b505050506040513d6020811015612d8257600080fd5b8101908080519060200190929190505050612d9f57505050612f9b565b6000811415612db057505050612f9b565b80600d600085815260200190815260200160002081905550600360405180604001604052804381526020018385018152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506004604051806040016040528043815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600560405180604001604052807f0000000000000000000000000000000000000000000000000000000000000000430181526020018381525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b158015612f7f57600080fd5b505af1158015612f93573d6000803e3d6000fd5b505050505050505b565b600082600184510381518110612faf57fe5b6020026020010151600001518210612fcd576001835103905061302d565b600080600185510390505b81811115613027576000600260018484010181612ff157fe5b0490508486828151811061300157fe5b6020026020010151600001511161301a57809250613021565b6001810391505b50612fd8565b81925050505b92915050565b6000600a54141561304c57600854600f8190555061313a565b600060036001600380549050038154811061306357fe5b90600052602060002090600202016001015490506000600a54821061308c57600a548203613092565b81600a54035b90506000600a546305f5e1008302816130a757fe5b0490506000620f4240600b548302816130bc57fe5b049050600a5484106130e5576305f5e100816305f5e10003600f5402816130df57fe5b046130fe565b6305f5e100816305f5e10001600f5402816130fc57fe5b045b600f81905550600854600f54101561311e57600854600f81905550613135565b600954600f54111561313457600954600f819055505b5b505050505b565b6040518060c001604052806000815260200160608152602001600081526020016000815260200160008152602001600081525090565b60405180604001604052806000815260200160008152509056fea2646970667358221220bc0c85e7375786ba956973bde1ce722c254425ab1f3fdebb3ad495469805219a64736f6c634300060c0033";