$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/TechfiosLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios login functionality Validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFeature"
    },
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 2926982700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to Login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TFScenario1"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 6,
      "value": "#Given User is on techfios login page"
    },
    {
      "line": 7,
      "value": "#When User enters username as \"demo@techfios.com\""
    },
    {
      "line": 8,
      "value": "#\tWhen User enters password as \"abc123\""
    },
    {
      "line": 9,
      "value": "#   And User clicks on \"Signin\""
    },
    {
      "line": 10,
      "value": "#   Then User should land on \"dashboardpage\""
    },
    {
      "line": 11,
      "value": "#   Then User clicks on \"Bank \u0026 cash\""
    },
    {
      "line": 12,
      "value": "#   Then User clicks on \"New Account\""
    },
    {
      "line": 13,
      "value": "#   Then User should land on \"accounts\""
    },
    {
      "line": 14,
      "value": "#   Then User enters on \"accountTitle\""
    },
    {
      "line": 15,
      "value": "#   Then User enters on \"description\""
    },
    {
      "line": 16,
      "value": "#   Then User enters on \"initialBalance\""
    },
    {
      "line": 17,
      "value": "#   Then User enters on \"accountNumber\""
    },
    {
      "line": 18,
      "value": "#   Then User enters on \"contactPerson\""
    },
    {
      "line": 19,
      "value": "#   Then User enters on \"phoneNumber\""
    },
    {
      "line": 20,
      "value": "#   And User enters on \"internetBankingURL\""
    },
    {
      "line": 21,
      "value": "#   And User clicks on \"Submit\""
    },
    {
      "line": 22,
      "value": "#   Then User should be able to validate account created successfully"
    }
  ],
  "line": 27,
  "name": "User should be able to Login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@TFScenario1"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User clicks on \"\u003cSignin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User should land on \"\u003cdashboardpage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User clicks on \"\u003cBank\u0026cash\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 34,
      "value": "#Then User clicks on \"\u003cNewAccount\u003e\""
    },
    {
      "line": 35,
      "value": "#Then User should land on \"\u003caccounts\u003e\""
    },
    {
      "line": 36,
      "value": "#Then User enters on \"\u003caccountTitle\u003e\""
    },
    {
      "line": 37,
      "value": "#Then User enters on \"\u003cdescription\u003e\""
    },
    {
      "line": 38,
      "value": "#Then User enters on \"\u003cinitialBalance\u003e\""
    },
    {
      "line": 39,
      "value": "#Then User enters on \"\u003caccountNumber\u003e\""
    },
    {
      "line": 40,
      "value": "#Then User enters on \"\u003ccontactPerson\u003e\""
    },
    {
      "line": 41,
      "value": "#Then User enters on \"\u003cphoneNumber\u003e\""
    },
    {
      "line": 42,
      "value": "#And User enters on \"\u003cinternetBankingURL\u003e\""
    },
    {
      "line": 43,
      "value": "#And User clicks on \"\u003cSubmit\u003e\""
    },
    {
      "line": 44,
      "value": "#Then User should be able to validate account created successfully"
    }
  ],
  "line": 47,
  "name": "",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Signin",
        "dashboardpage",
        "Bank\u0026cash",
        "NewAccount",
        "accounts",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phoneNumber",
        "internetBankingURL",
        "Submit"
      ],
      "line": 48,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Signin",
        "dashboardpage",
        "Bank\u0026cash",
        "NewAccount",
        "accounts",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phoneNumber",
        "internetBankingURL",
        "Submit"
      ],
      "line": 49,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2326025800,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "User should be able to Login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 26,
      "name": "@TFScenario1"
    },
    {
      "line": 1,
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User clicks on \"Signin\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User should land on \"dashboardpage\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User clicks on \"Bank\u0026cash\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TechFiosStepDefinitios.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 1084984800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "TechFiosStepDefinitios.user_enters_username_as(String)"
});
formatter.result({
  "duration": 111071900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "TechFiosStepDefinitios.user_enters_password_as(String)"
});
formatter.result({
  "duration": 69260700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Signin",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_clicks_on(String)"
});
formatter.result({
  "duration": 7814302300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dashboardpage",
      "offset": 21
    }
  ],
  "location": "TechFiosStepDefinitios.user_should_land_on()"
});
formatter.result({
  "duration": 676300,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027steps.TechFiosStepDefinitios.user_should_land_on() in file:/C:/Users/Manjusha%20Jaiswal/eclipse-workspace/Cucumber/target/test-classes/\u0027 with pattern [^User should land on \"([^\"]*)\"$] is declared with 0 parameters. However, the gherkin step has 1 arguments [dashboardpage]. \nStep: Then User should land on \"dashboardpage\"\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank\u0026cash",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_clicks_on(String)"
});
formatter.result({
  "status": "skipped"
});
});