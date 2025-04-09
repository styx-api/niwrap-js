// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MP_DIFFPOW_METADATA: Metadata = {
    id: "c5b67359558c4494958df37eab4b65d805a2c063.boutiques",
    name: "mp_diffpow",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface MpDiffpowParameters {
    "__STYXTYPE__": "mp_diffpow";
    "reg_file": InputPathType;
    "diff_reg_file": string;
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
        "mp_diffpow": mp_diffpow_cargs,
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
        "mp_diffpow": mp_diffpow_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mp_diffpow(...)`.
 *
 * @interface
 */
interface MpDiffpowOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * File containing squared motion parameters, temporal difference of motion parameters, and squared differenced values.
     */
    outfile: OutputPathType;
}


function mp_diffpow_params(
    reg_file: InputPathType,
    diff_reg_file: string,
): MpDiffpowParameters {
    /**
     * Build parameters.
    
     * @param reg_file Input file containing registration parameters (e.g., regparam.dat)
     * @param diff_reg_file Output file with differenced registration parameters (e.g., diffregparam.dat)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mp_diffpow" as const,
        "reg_file": reg_file,
        "diff_reg_file": diff_reg_file,
    };
    return params;
}


function mp_diffpow_cargs(
    params: MpDiffpowParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mp_diffpow.sh");
    cargs.push(execution.inputFile((params["reg_file"] ?? null)));
    cargs.push((params["diff_reg_file"] ?? null));
    return cargs;
}


function mp_diffpow_outputs(
    params: MpDiffpowParameters,
    execution: Execution,
): MpDiffpowOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MpDiffpowOutputs = {
        root: execution.outputFile("."),
        outfile: execution.outputFile([(params["diff_reg_file"] ?? null)].join('')),
    };
    return ret;
}


function mp_diffpow_execute(
    params: MpDiffpowParameters,
    execution: Execution,
): MpDiffpowOutputs {
    /**
     * Generates a file with specific motion parameter calculations useful for accounting for 'spin history' effects and other variations not accounted for by motion correction.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MpDiffpowOutputs`).
     */
    params = execution.params(params)
    const cargs = mp_diffpow_cargs(params, execution)
    const ret = mp_diffpow_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mp_diffpow(
    reg_file: InputPathType,
    diff_reg_file: string,
    runner: Runner | null = null,
): MpDiffpowOutputs {
    /**
     * Generates a file with specific motion parameter calculations useful for accounting for 'spin history' effects and other variations not accounted for by motion correction.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param reg_file Input file containing registration parameters (e.g., regparam.dat)
     * @param diff_reg_file Output file with differenced registration parameters (e.g., diffregparam.dat)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MpDiffpowOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MP_DIFFPOW_METADATA);
    const params = mp_diffpow_params(reg_file, diff_reg_file)
    return mp_diffpow_execute(params, execution);
}


export {
      MP_DIFFPOW_METADATA,
      MpDiffpowOutputs,
      MpDiffpowParameters,
      mp_diffpow,
      mp_diffpow_params,
};
