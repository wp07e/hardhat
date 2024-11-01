module.exports = {
    "solc": {
      "version": "0.8.4",
      "optimizer": {
        "enabled": true,
        "runs": 200
      }
    },
    "settings": {
      "compilationTarget": {
        "": "0.5.16"
      }
    },
    "coverage": {
      "directories": [
        "coverage/contracts"
      ],
      "reports": [
        {
          " reporters": [
            {
              "name": "text-summary"
            },
            {
              "name": "lcov",
              "dir": "coverage/lcov",
              "subdir": "."
            }
          ]
        }
      ]
    }
  };
  