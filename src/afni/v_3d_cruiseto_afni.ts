// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_CRUISETO_AFNI_METADATA: Metadata = {
    id: "ecced7561c452fa6014dcc10bbbbd514bae7282a.boutiques",
    name: "3dCRUISEtoAFNI",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dCruisetoAfniTraceParameters {
    "__STYXTYPE__": "trace";
    "trace": boolean;
    "TRACE": boolean;
}


interface V3dCruisetoAfniParameters {
    "__STYXTYPE__": "3dCRUISEtoAFNI";
    "input": InputPathType;
    "novolreg": boolean;
    "noxform": boolean;
    "setenv"?: string | null | undefined;
    "trace"?: V3dCruisetoAfniTraceParameters | null | undefined;
    "nomall": boolean;
    "yesmall": boolean;
    "help": boolean;
    "h": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "3dCRUISEtoAFNI": v_3d_cruiseto_afni_cargs,
        "trace": v_3d_cruiseto_afni_trace_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
    };
    return outputsFuncs[t];
}


function v_3d_cruiseto_afni_trace_params(
    trace: boolean = false,
    trace_: boolean = false,
): V3dCruisetoAfniTraceParameters {
    /**
     * Build parameters.
    
     * @param trace Turns on In/Out debug and Memory tracing. It's recommended to redirect stdout to a file when using this option.
     * @param trace_ Turns on extreme tracing.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "trace" as const,
        "trace": trace,
        "TRACE": trace_,
    };
    return params;
}


function v_3d_cruiseto_afni_trace_cargs(
    params: V3dCruisetoAfniTraceParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    if ((params["trace"] ?? null)) {
        cargs.push("-trace");
    }
    if ((params["TRACE"] ?? null)) {
        cargs.push("-TRACE");
    }
    return cargs;
}


/**
 * Output object returned when calling `v_3d_cruiseto_afni(...)`.
 *
 * @interface
 */
interface V3dCruisetoAfniOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_3d_cruiseto_afni_params(
    input: InputPathType,
    novolreg: boolean = false,
    noxform: boolean = false,
    setenv: string | null = null,
    trace: V3dCruisetoAfniTraceParameters | null = null,
    nomall: boolean = false,
    yesmall: boolean = false,
    help: boolean = false,
    h: boolean = false,
): V3dCruisetoAfniParameters {
    /**
     * Build parameters.
    
     * @param input Input CRUISE header file in OpenDX format
     * @param novolreg Ignore any Rotate, Volreg, Tagalign, or WarpDrive transformations present in the Surface Volume.
     * @param noxform Same as -novolreg.
     * @param setenv Set environment variable ENVname to be ENVvalue. Quotes are necessary. Example: suma -setenv "'SUMA_BackgroundColor = 1 0 1'"
     * @param trace Turns on In/Out debug and Memory tracing. It's recommended to redirect stdout to a file when using this option.
     * @param nomall Turn off memory tracing.
     * @param yesmall Turn on memory tracing (default).
     * @param help The entire help output.
     * @param h Displays mini help; in many cases, it's the same as -help.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dCRUISEtoAFNI" as const,
        "input": input,
        "novolreg": novolreg,
        "noxform": noxform,
        "nomall": nomall,
        "yesmall": yesmall,
        "help": help,
        "h": h,
    };
    if (setenv !== null) {
        params["setenv"] = setenv;
    }
    if (trace !== null) {
        params["trace"] = trace;
    }
    return params;
}


function v_3d_cruiseto_afni_cargs(
    params: V3dCruisetoAfniParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dCRUISEtoAFNI");
    cargs.push(
        "-input",
        execution.inputFile((params["input"] ?? null))
    );
    if ((params["novolreg"] ?? null)) {
        cargs.push("-novolreg");
    }
    if ((params["noxform"] ?? null)) {
        cargs.push("-noxform");
    }
    if ((params["setenv"] ?? null) !== null) {
        cargs.push(
            "-setenv",
            (params["setenv"] ?? null)
        );
    }
    if ((params["trace"] ?? null) !== null) {
        cargs.push(...dynCargs((params["trace"] ?? null).__STYXTYPE__)((params["trace"] ?? null), execution));
    }
    if ((params["nomall"] ?? null)) {
        cargs.push("-nomall");
    }
    if ((params["yesmall"] ?? null)) {
        cargs.push("-yesmall");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["h"] ?? null)) {
        cargs.push("-h");
    }
    return cargs;
}


function v_3d_cruiseto_afni_outputs(
    params: V3dCruisetoAfniParameters,
    execution: Execution,
): V3dCruisetoAfniOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dCruisetoAfniOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_3d_cruiseto_afni_execute(
    params: V3dCruisetoAfniParameters,
    execution: Execution,
): V3dCruisetoAfniOutputs {
    /**
     * Converts a CRUISE dataset defined by a header in OpenDX format.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dCruisetoAfniOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_cruiseto_afni_cargs(params, execution)
    const ret = v_3d_cruiseto_afni_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_cruiseto_afni(
    input: InputPathType,
    novolreg: boolean = false,
    noxform: boolean = false,
    setenv: string | null = null,
    trace: V3dCruisetoAfniTraceParameters | null = null,
    nomall: boolean = false,
    yesmall: boolean = false,
    help: boolean = false,
    h: boolean = false,
    runner: Runner | null = null,
): V3dCruisetoAfniOutputs {
    /**
     * Converts a CRUISE dataset defined by a header in OpenDX format.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input Input CRUISE header file in OpenDX format
     * @param novolreg Ignore any Rotate, Volreg, Tagalign, or WarpDrive transformations present in the Surface Volume.
     * @param noxform Same as -novolreg.
     * @param setenv Set environment variable ENVname to be ENVvalue. Quotes are necessary. Example: suma -setenv "'SUMA_BackgroundColor = 1 0 1'"
     * @param trace Turns on In/Out debug and Memory tracing. It's recommended to redirect stdout to a file when using this option.
     * @param nomall Turn off memory tracing.
     * @param yesmall Turn on memory tracing (default).
     * @param help The entire help output.
     * @param h Displays mini help; in many cases, it's the same as -help.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dCruisetoAfniOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_CRUISETO_AFNI_METADATA);
    const params = v_3d_cruiseto_afni_params(input, novolreg, noxform, setenv, trace, nomall, yesmall, help, h)
    return v_3d_cruiseto_afni_execute(params, execution);
}


export {
      V3dCruisetoAfniOutputs,
      V3dCruisetoAfniParameters,
      V3dCruisetoAfniTraceParameters,
      V_3D_CRUISETO_AFNI_METADATA,
      v_3d_cruiseto_afni,
      v_3d_cruiseto_afni_params,
      v_3d_cruiseto_afni_trace_params,
};
