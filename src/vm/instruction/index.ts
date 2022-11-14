import IStatement from "../../parser/IStatement";
import IContext from "../IContext";

import LdaSmi from "./LdaSmi";
import LdaUndefined from "./LdaUndefined";
import LdaGlobal from "./LdaGlobal";
import LdaConstant from "./LdaConstant";
import Ldar from "./Ldar";
import LdaZero from "./LdaZero";
import LdaFalse from "./LdaFalse";
import LdaTrue from "./LdaTrue";

import GetNamedProperty from "./GetNamedProperty";
import CallProperty1 from "./CallProperty1";
import Return from "./Return";
import Star from "./Star";
import StaGlobal from "./StaGlobal";
import CreateEmptyArrayLiteral from "./CreateEmptyArrayLiteral";

import TestLessThan from "./TestLessThan";
import TestLessThanOrEqual from "./TestLessThanOrEqual";
import TestGreaterThan from "./TestGreaterThan";
import TestGreaterThanOrEqual from "./TestGreaterThanOrEqual";
import TestEqual from "./TestEqual";
import TestEqualStrict from "./TestEqualStrict";


const Insns: {[key: string]: (context: IContext, stm: IStatement) => any} = {
    // Load to accumulator Instructions.
    'LdaSmi': LdaSmi, 'LdaSmi.Wide': LdaSmi, 'LdaSmi.ExtraWide': LdaSmi,
    LdaUndefined,
    LdaGlobal,
    LdaConstant,
    Ldar,
    LdaZero,
    LdaFalse,
    LdaTrue,

    GetNamedProperty, //* LdaNamedProperty in v8 latest version.
    CallProperty1,
    Return,
    // Store the value of accumulator Instructions.
    Star,
    StaGlobal,

    CreateEmptyArrayLiteral,
    // Test Instructions
    TestLessThan,
    TestLessThanOrEqual,
    TestGreaterThan,
    TestGreaterThanOrEqual,
    TestEqual,
    TestEqualStrict,

};

export default Insns;