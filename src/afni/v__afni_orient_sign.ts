// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__AFNI_ORIENT_SIGN_METADATA: Metadata = {
    id: "15cd2787067ab0ba26eeeccbc4360543d4f091c5.boutiques",
    name: "@AfniOrientSign",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VAfniOrientSignParameters {
    "__STYXTYPE__": "@AfniOrientSign";
    "infile": InputPathType;
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
        "@AfniOrientSign": v__afni_orient_sign_cargs,
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
        "@AfniOrientSign": v__afni_orient_sign_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__afni_orient_sign(...)`.
 *
 * @interface
 */
interface VAfniOrientSignOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file containing the orientation signs of the dataset
     */
    outfile: OutputPathType;
}


function v__afni_orient_sign_params(
    infile: InputPathType,
): VAfniOrientSignParameters {
    /**
     * Build parameters.
    
     * @param infile Input image file to determine orientation
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@AfniOrientSign" as const,
        "infile": infile,
    };
    return params;
}


function v__afni_orient_sign_cargs(
    params: VAfniOrientSignParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@AfniOrientSign");
    cargs.push(
        "-orient",
        execution.inputFile((params["infile"] ?? null))
    );
    return cargs;
}


function v__afni_orient_sign_outputs(
    params: VAfniOrientSignParameters,
    execution: Execution,
): VAfniOrientSignOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VAfniOrientSignOutputs = {
        root: execution.outputFile("."),
        outfile: execution.outputFile([path.basename((params["infile"] ?? null)), "_orient.txt"].join('')),
    };
    return ret;
}


function v__afni_orient_sign_execute(
    params: VAfniOrientSignParameters,
    execution: Execution,
): VAfniOrientSignOutputs {
    /**
     * A tool within the AFNI suite to determine the orientation signs of datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VAfniOrientSignOutputs`).
     */
    params = execution.params(params)
    const cargs = v__afni_orient_sign_cargs(params, execution)
    const ret = v__afni_orient_sign_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__afni_orient_sign(
    infile: InputPathType,
    runner: Runner | null = null,
): VAfniOrientSignOutputs {
    /**
     * A tool within the AFNI suite to determine the orientation signs of datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param infile Input image file to determine orientation
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VAfniOrientSignOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__AFNI_ORIENT_SIGN_METADATA);
    const params = v__afni_orient_sign_params(infile)
    return v__afni_orient_sign_execute(params, execution);
}


export {
      VAfniOrientSignOutputs,
      VAfniOrientSignParameters,
      V__AFNI_ORIENT_SIGN_METADATA,
      v__afni_orient_sign,
      v__afni_orient_sign_params,
};
