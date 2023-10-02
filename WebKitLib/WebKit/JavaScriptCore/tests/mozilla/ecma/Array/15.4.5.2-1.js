/* The contents of this file are subject to the Netscape Public
 * License Version 1.1 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of
 * the License at http://www.mozilla.org/NPL/
 *
 * Software distributed under the License is distributed on an "AS
 * IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * rights and limitations under the License.
 *
 * The Original Code is Mozilla Communicator client code, released March
 * 31, 1998.
 *
 * The Initial Developer of the Original Code is Netscape Communications
 * Corporation. Portions created by Netscape are
 * Copyright (C) 1998 Netscape Communications Corporation. All
 * Rights Reserved.
 *
 * Contributor(s): 
 * 
 */
/**
    File Name:          15.4.5.2-1.js
    ECMA Section:       Array.length
    Description:
    15.4.5.2 length
    The length property of this Array object is always numerically greater
    than the name of every property whose name is an array index.

    The length property has the attributes { DontEnum, DontDelete }.
    Author:             christine@netscape.com
    Date:               12 november 1997
*/

    var SECTION = "15.4.5.2-1";
    var VERSION = "ECMA_1";
    startTest();
    var TITLE   = "Array.length";

    writeHeaderToLog( SECTION + " "+ TITLE);

    var testcases = getTestCases();
    test();
function getTestCases() {
    var array = new Array();
    var item = 0;

    array[item++] = new TestCase(   SECTION,
                                    "var A = new Array(); A.length",
                                    0,
                                    eval("var A = new Array(); A.length") );

    array[item++] = new TestCase(   SECTION,
                                    "var A = new Array(); A[Math.pow(2,32)-2] = 'hi'; A.length",
                                    Math.pow(2,32)-1,
                                    eval("var A = new Array(); A[Math.pow(2,32)-2] = 'hi'; A.length") );

    array[item++] = new TestCase(   SECTION,
                                    "var A = new Array(); A.length = 123; A.length",
                                    123,
                                    eval("var A = new Array(); A.length = 123; A.length") );

    array[item++] = new TestCase(   SECTION,
                                    "var A = new Array(); A.length = 123; var PROPS = ''; for ( var p in A ) { PROPS += ( p == 'length' ? p : ''); } PROPS",
                                    "",
                                    eval("var A = new Array(); A.length = 123; var PROPS = ''; for ( var p in A ) { PROPS += ( p == 'length' ? p : ''); } PROPS") );


    array[item++] = new TestCase(   SECTION,
                                    "var A = new Array(); A.length = 123; delete A.length",
                                    false ,
                                    eval("var A = new Array(); A.length = 123; delete A.length") );

    array[item++] = new TestCase(   SECTION,
                                    "var A = new Array(); A.length = 123; delete A.length; A.length",
                                    123,
                                    eval("var A = new Array(); A.length = 123; delete A.length; A.length") );
    return array;
}

function test() {
    for ( tc=0; tc < testcases.length; tc++ ) {
        testcases[tc].passed = writeTestCaseResult(
                            testcases[tc].expect,
                            testcases[tc].actual,
                            testcases[tc].description +" = "+
                            testcases[tc].actual );

        testcases[tc].reason += ( testcases[tc].passed ) ? "" : "wrong value ";
    }
    stopTest();
    return ( testcases );
}
