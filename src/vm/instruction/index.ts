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
    LdaGlobal,
    LdaConstant,

    LdaFalse,
    LdaTrue,


    GetNamedProperty, // * LdaNamedProperty in v8 latest version.
    GetKeyedProperty,

    CallProperty1,
    Return,
    // Store the value of accumulator Instructions.
    Star,
    StaGlobal,
    SetKeyedProperty,

    CreateEmptyArrayLiteral,
    CreateArrayLiteral,

    // Test Instructions
    TestLessThan,
    TestLessThanOrEqual,
    TestGreaterThan,
    TestGreaterThanOrEqual,
    TestEqual,
    TestEqualStrict,

    /* Jump */
    Jump,
    JumpIfFalse,
    JumpIfTrue,
    JumpLoop,

    /* Binary operators with immediate operands */
    MulSmi,

    /* Binary Operators */
    Add,

    /* Unary Operators */
    Inc,
};

export default Insns;