import React from "react";
import {isValidLogin} from "../api/login";


describe("checking isValidLogin function with username and password ",()=>{
    it("checking  for both username and passwords are empty values `",()=>{
        const loginInfo={ login: "", password: "" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"Username should be at least 5 characters long "}); 
    })

    it("checking  with  username  of length 4 and  passwords  empty values",()=>{
        const loginInfo={ login: "test", password: "" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"Username should be at least 5 characters long "});
       
    })
    
    it("checking  with  username  of length 5 and  empty password",()=>{
        const loginInfo={ login: "Dummy", password: "" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"password should contain one small letter ,one capital letter and one number of legth minimum 8 characters  "});
        
    })

    it("valid username length , missing Uppercanse in password",()=>{
        const loginInfo={ login: "Dummy", password: "adminadmin123" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"password should contain one small letter ,one capital letter and one number of legth minimum 8 characters  "});
        
    })
    it("valid username length , missing numner in password",()=>{
        const loginInfo={ login: "Dummy", password: "Adminadmin" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"password should contain one small letter ,one capital letter and one number of legth minimum 8 characters  "});
        
    })
    it("valid username length , missing lower case in password",()=>{
        const loginInfo={ login: "Dummy", password: "ADMIN12345" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"password should contain one small letter ,one capital letter and one number of legth minimum 8 characters  "});
        
    })

    it("valid username length ,  password of length lessthan 8 char",()=>{
        const loginInfo={ login: "Dummy", password: "Admin1" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"password should contain one small letter ,one capital letter and one number of legth minimum 8 characters  "});
        
    })

    it("invalid user name of 5 char long and password of 8 char long with upper lower number as chars ",()=>{
        const loginInfo={ login: "Dummy", password: "DummyPwd123" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"invalid credentails"});
        
    })
    it("invalid user name of 5 char long and password of 8 char long with upper lower number as chars ",()=>{
        const loginInfo={ login: "admin", password: "Admin123" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:true,message:"success"});
        
    })
})