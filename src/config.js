const Config = {
  contract: {
    abi: [
      { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
        ],
        name: 'AddToken',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'identifier',
            type: 'uint256',
          },
        ],
        name: 'CreateAgreement',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'identifier',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'date',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'InvestorJoin',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
        ],
        name: 'RemoveToken',
        type: 'event',
      },
      { stateMutability: 'nonpayable', type: 'fallback' },
      {
        inputs: [
          { internalType: 'uint256', name: '_agreementID', type: 'uint256' },
          { internalType: 'uint256', name: '_hardcap', type: 'uint256' },
          { internalType: 'uint256', name: '_endDate', type: 'uint256' },
          { internalType: 'bytes', name: '_name', type: 'bytes' },
        ],
        name: 'addDCBAgreement',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'contract IERC20', name: '_token', type: 'address' },
          { internalType: 'uint256', name: '_startDate', type: 'uint256' },
          { internalType: 'uint256', name: '_endDate', type: 'uint256' },
          { internalType: 'uint256', name: '_rate', type: 'uint256' },
        ],
        name: 'addTokenToDCB',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'agreementIndices',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'dcbPools',
        outputs: [
          { internalType: 'uint256', name: 'agreementID', type: 'uint256' },
          { internalType: 'bytes', name: 'agreementName', type: 'bytes' },
          { internalType: 'address', name: 'innovatorWallet', type: 'address' },
          { internalType: 'uint256', name: 'hardcap', type: 'uint256' },
          { internalType: 'uint256', name: 'createDate', type: 'uint256' },
          { internalType: 'uint256', name: 'endDate', type: 'uint256' },
          { internalType: 'bool', name: 'active', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getDecubateToken',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '_token', type: 'address' }],
        name: 'getTokenFromDCB',
        outputs: [
          {
            components: [
              {
                internalType: 'contract IERC20',
                name: 'token',
                type: 'address',
              },
              { internalType: 'uint256', name: 'startDate', type: 'uint256' },
              { internalType: 'uint256', name: 'endDate', type: 'uint256' },
              { internalType: 'uint256', name: 'rate', type: 'uint256' },
              { internalType: 'uint256', name: 'totalRaise', type: 'uint256' },
              { internalType: 'bool', name: 'active', type: 'bool' },
            ],
            internalType: 'struct DecubateCrowfunding.TokenModel',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'contract IERC20', name: '_token', type: 'address' },
        ],
        name: 'getTotalToken',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: '_agreementID', type: 'uint256' },
          { internalType: 'uint256', name: '_joinDate', type: 'uint256' },
          { internalType: 'uint256', name: '_investFund', type: 'uint256' },
        ],
        name: 'joinDCBAgreement',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '_token', type: 'address' }],
        name: 'removeTokenFromDCB',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'contract IERC20', name: '_token', type: 'address' },
        ],
        name: 'setDecubateToken',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'tokenPools',
        outputs: [
          { internalType: 'contract IERC20', name: 'token', type: 'address' },
          { internalType: 'uint256', name: 'startDate', type: 'uint256' },
          { internalType: 'uint256', name: 'endDate', type: 'uint256' },
          { internalType: 'uint256', name: 'rate', type: 'uint256' },
          { internalType: 'uint256', name: 'totalRaise', type: 'uint256' },
          { internalType: 'bool', name: 'active', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    address: '0xc04e1d4dd28f4be10430318443333767d573eabc',
  },
}

export default Config
