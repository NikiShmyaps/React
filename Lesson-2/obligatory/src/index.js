"use strict";

var _money = require("./money");

var _employers = require("./employers");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MakeBusiness =
/*#__PURE__*/
function () {
  function MakeBusiness(owner, director, cash, emp) {
    _classCallCheck(this, MakeBusiness);

    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }

  _createClass(MakeBusiness, [{
    key: "conclusion",
    value: function conclusion() {
      console.log("We have a business. Owner: ".concat(this.owner, " , director: ").concat(this.director, " . Our budget: ").concat(this.cash, " . And our employers: ").concat(this.emp, "\n    And we have a sponsors: ").concat(_money.sumSponsors, "\n    Note. Be careful with ").concat(_money.eu[0], ". It's a huge risk."));
    }
  }]);

  return MakeBusiness;
}();

var makeBusiness = new MakeBusiness('Sam', 'Victor', _money.money, _employers.employersNames);
makeBusiness.conclusion();