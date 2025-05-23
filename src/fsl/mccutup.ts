// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MCCUTUP_METADATA: Metadata = {
    id: "0f68e863495d6d4c5b17f7f5ba43e003d866fab3.boutiques",
    name: "mccutup",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface MccutupParameters {
    "__STYXTYPE__": "mccutup";
    "input": InputPathType;
    "output_file"?: string | null | undefined;
    "param1"?: string | null | undefined;
    "param2"?: string | null | undefined;
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
        "mccutup": mccutup_cargs,
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
        "mccutup": mccutup_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mccutup(...)`.
 *
 * @interface
 */
interface MccutupOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file
     */
    output: OutputPathType | null;
}


function mccutup_params(
    input: InputPathType,
    output_file: string | null = null,
    param1: string | null = null,
    param2: string | null = null,
): MccutupParameters {
    /**
     * Build parameters.
    
     * @param input Input file
     * @param output_file Specify output file name
     * @param param1 Parameter 1 description
     * @param param2 Parameter 2 description
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mccutup" as const,
        "input": input,
    };
    if (output_file !== null) {
        params["output_file"] = output_file;
    }
    if (param1 !== null) {
        params["param1"] = param1;
    }
    if (param2 !== null) {
        params["param2"] = param2;
    }
    return params;
}


function mccutup_cargs(
    params: MccutupParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mccutup");
    cargs.push(execution.inputFile((params["input"] ?? null)));
    if ((params["output_file"] ?? null) !== null) {
        cargs.push(
            "--output",
            (params["output_file"] ?? null)
        );
    }
    if ((params["param1"] ?? null) !== null) {
        cargs.push(
            "--param1",
            (params["param1"] ?? null)
        );
    }
    if ((params["param2"] ?? null) !== null) {
        cargs.push(
            "--param2",
            (params["param2"] ?? null)
        );
    }
    return cargs;
}


function mccutup_outputs(
    params: MccutupParameters,
    execution: Execution,
): MccutupOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MccutupOutputs = {
        root: execution.outputFile("."),
        output: ((params["output_file"] ?? null) !== null) ? execution.outputFile([(params["output_file"] ?? null)].join('')) : null,
    };
    return ret;
}


function mccutup_execute(
    params: MccutupParameters,
    execution: Execution,
): MccutupOutputs {
    /**
     * FSL mccutup tool.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MccutupOutputs`).
     */
    params = execution.params(params)
    const cargs = mccutup_cargs(params, execution)
    const ret = mccutup_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mccutup(
    input: InputPathType,
    output_file: string | null = null,
    param1: string | null = null,
    param2: string | null = null,
    runner: Runner | null = null,
): MccutupOutputs {
    /**
     * FSL mccutup tool.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input Input file
     * @param output_file Specify output file name
     * @param param1 Parameter 1 description
     * @param param2 Parameter 2 description
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MccutupOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MCCUTUP_METADATA);
    const params = mccutup_params(input, output_file, param1, param2)
    return mccutup_execute(params, execution);
}


export {
      MCCUTUP_METADATA,
      MccutupOutputs,
      MccutupParameters,
      mccutup,
      mccutup_params,
};
