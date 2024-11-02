import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
  import { expect } from "chai";
  import hre from "hardhat";
  
  describe("ArbitrageBot", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.

    // NOTE: Config is '.mocharc.json'. May be using local network (if forked) by default
    async function ArbitrageBotFixture() {
      const pool = "0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e";    // Mainnet pool.
  
      // Contracts are deployed using the first signer/account by default
      const [owner, otherAccount] = await hre.ethers.getSigners();
  
      const ArbirageBot = await hre.ethers.getContractFactory("ArbitrageBot");
      const bot = await ArbirageBot.deploy(pool);
  
      return { bot, owner, otherAccount };
    }
  
    describe("Deployment", function () {
      it("Make sure new string matches", async function () {
        const { bot } = await loadFixture(ArbitrageBotFixture);
  
        expect(await bot.getNewString()).to.equal("Test Test NEW NEW Test Test Hey Hey");
      });
  
    //   it("Should set the right owner", async function () {
    //     const { lock, owner } = await loadFixture(deployOneYearLockFixture);
  
    //     expect(await lock.owner()).to.equal(owner.address);
    //   });
    });
  
    // describe("Withdrawals", function () {
    //   describe("Validations", function () {
    //     it("Should revert with the right error if called too soon", async function () {
    //       const { lock } = await loadFixture(deployOneYearLockFixture);
  
    //       await expect(lock.withdraw()).to.be.revertedWith(
    //         "You can't withdraw yet"
    //       );
    //     });
    //   });
    // });
  });
  