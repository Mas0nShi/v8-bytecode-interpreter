import IStatement from "../../parser/IStatement";
import IContext from "../IContext";

import Ldar from "./Impl/Ldar";
import LdaZero from "./Impl/LdaZero";
import LdaSmi from "./Impl/LdaSmi";
import LdaUndefined from "./Impl/LdaUndefined";
import LdaNull from "./Impl/LdaNull";
import LdaGlobal from "./Impl/LdaGlobal";
import LdaConstant from "./Impl/LdaConstant";

import LdaFalse from "./Impl/LdaFalse";
import LdaTrue from "./Impl/LdaTrue";

import GetNamedProperty from "./Impl/GetNamedProperty";
import GetKeyedProperty from "./Impl/GetKeyedProperty";

import CallProperty1 from "./Impl/CallProperty1";
import Return from "./Impl/Return";

import Star from "./Impl/Star";
import StaGlobal from "./Impl/StaGlobal";
import SetKeyedProperty from "./Impl/SetKeyedProperty";

import CreateEmptyArrayLiteral from "./Impl/CreateEmptyArrayLiteral";
import CreateArrayLiteral from "./Impl/CreateArrayLiteral";

import TestLessThan from "./Impl/TestLessThan";
import TestLessThanOrEqual from "./Impl/TestLessThanOrEqual";
import TestGreaterThan from "./Impl/TestGreaterThan";
import TestGreaterThanOrEqual from "./Impl/TestGreaterThanOrEqual";
import TestEqual from "./Impl/TestEqual";
import TestEqualStrict from "./Impl/TestEqualStrict";

import Jump from "./Impl/Jump";
import JumpIfFalse from "./Impl/JumpIfFalse";
import JumpIfTrue from "./Impl/JumpIfTrue";
import JumpLoop from "./Impl/JumpLoop";

import MulSmi from "./Impl/MulSmi";

import Add from "./Impl/Add";


import Inc from "./Impl/Inc";


const Insns: {[key: string]: (context: IContext, stm: IStatement) => any} = {
    /* - [Loading the accumulator] */  
    Ldar,
    LdaZero,
    'LdaSmi': LdaSmi, 'LdaSmi.Wide': LdaSmi, 'LdaSmi.ExtraWide': LdaSmi,
    LdaUndefined,
    LdaNull,
    LdaConstant,
    LdaFalse,
    LdaTrue,
    // LdaTheHole,
    // LdaContextSlot,
    // LdaImmutableContextSlot,
    // LdaCurrentContextSlot,
    // LdaImmutableCurrentContextSlot,

    /* - [Register Loads ] */
    Star,
    // Mov,
    // PushContext,
    // PopContext,

    /* - [Test Operations ] */
    // TestReferenceEqual,
    // TestUndetectable,
    // TestNull,
    // TestUndefined,
    // TestTypeOf,


    /* Globals */
    LdaGlobal,
    // LdaGlobalInsideTypeof,
    StaGlobal,

    /* Context operations */
    // StaContextSlot,
    // StaCurrentContextSlot,

    /* Load-Store lookup slots */
    //

    /* Property loads (LoadIC) operations */ 
    GetNamedProperty, // * LdaNamedProperty in v8 latest version.
    // LdaNamedPropertyFromSuper,
    GetKeyedProperty, // * LdaKeyedProperty in v8 latest version.

    /* Operations on module variables */
    //

    /* Propery stores (StoreIC) operations */
    SetKeyedProperty, // * StaKeyedProperty in v8 latest version.
    // StaNamedOwnProperty,

    /* Binary Operators */
    Add,
    //

    /* Binary operators with immediate operands */
    MulSmi,
    //

    /* Unary Operators */
    Inc,

    /* GetSuperConstructor operator */
    //

    /* Call operations */
    CallProperty1,
    // 

    /* Intrinsics */
    /* Construct operators */

    /* Effectful Test Operators */
    TestLessThan,
    TestLessThanOrEqual,
    TestGreaterThan,
    TestGreaterThanOrEqual,
    TestEqual,
    TestEqualStrict,
    // 

    /* Cast operators */
    // 
    /* Literals */
    CreateEmptyArrayLiteral,
    CreateArrayLiteral,
    //
    /* Tagged templates */
    /* Closure allocation */
    /* Context allocation */
    /* Arguments allocation */

    /* Control Flow -- carefully ordered for efficient checks */
    /* - [Unconditional jumps] */
    JumpLoop,
    /* - [Forward jumps] */
    Jump,
    /* - [Start constant jumps] */
    // 
    /* - [Conditional jumps] */                                                  
    /* - [Conditional constant jumps] */
    // 
    /* - [Start ToBoolean jumps] */
    // 
    /* - [End constant jumps] */                                                 
    /* - [Conditional immediate jumps] */
    // 
    /* - [End ToBoolean jumps] */
    JumpIfFalse,
    JumpIfTrue,

    /* Smi-table lookup for switch statements */
    // 
    /* Complex flow control For..in */
    // 
    /* Update the pending message */
    // 
    /* Non-local flow control */
    Return,
    // 
    /* Generators */
    // 
    /* Iterator protocol operations */
    // 
    /* Debugger */
    // 
    /* Block Coverage */
    // 
    /* Execution Abort (internal error) */
    // 
};

export default Insns;