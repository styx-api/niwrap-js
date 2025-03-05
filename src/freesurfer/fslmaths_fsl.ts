// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSLMATHS_FSL_METADATA: Metadata = {
    id: "1ba348f3e9fa1acbe3b64d58f1387f609d1c083e.boutiques",
    name: "fslmaths.fsl",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FslmathsFslParameters {
    "__STYXTYPE__": "fslmaths.fsl";
    "first_input": InputPathType;
    "operations_and_inputs": string;
    "output_image": string;
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
        "fslmaths.fsl": fslmaths_fsl_cargs,
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
        "fslmaths.fsl": fslmaths_fsl_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fslmaths_fsl(...)`.
 *
 * @interface
 */
interface FslmathsFslOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The resultant output image after applying the specified operations.
     */
    output_file: OutputPathType;
}


function fslmaths_fsl_params(
    first_input: InputPathType,
    operations_and_inputs: string,
    output_image: string,
): FslmathsFslParameters {
    /**
     * Build parameters.
    
     * @param first_input First input image for fslmaths operations.
     * @param operations_and_inputs Operations and inputs to be applied on the first image.
     * @param output_image Output image file.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fslmaths.fsl" as const,
        "first_input": first_input,
        "operations_and_inputs": operations_and_inputs,
        "output_image": output_image,
    };
    return params;
}


function fslmaths_fsl_cargs(
    params: FslmathsFslParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fslmaths");
    cargs.push(execution.inputFile((params["first_input"] ?? null)));
    cargs.push((params["operations_and_inputs"] ?? null));
    cargs.push((params["output_image"] ?? null));
    return cargs;
}


function fslmaths_fsl_outputs(
    params: FslmathsFslParameters,
    execution: Execution,
): FslmathsFslOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslmathsFslOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["output_image"] ?? null), ".nii.gz"].join('')),
    };
    return ret;
}


function fslmaths_fsl_execute(
    params: FslmathsFslParameters,
    execution: Execution,
): FslmathsFslOutputs {
    /**
     * FSLmaths: part of FMRIB Software Library (FSL) for manipulating images via various mathematical operations.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslmathsFslOutputs`).
     */
    params = execution.params(params)
    const cargs = fslmaths_fsl_cargs(params, execution)
    const ret = fslmaths_fsl_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fslmaths_fsl(
    first_input: InputPathType,
    operations_and_inputs: string,
    output_image: string,
    runner: Runner | null = null,
): FslmathsFslOutputs {
    /**
     * FSLmaths: part of FMRIB Software Library (FSL) for manipulating images via various mathematical operations.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param first_input First input image for fslmaths operations.
     * @param operations_and_inputs Operations and inputs to be applied on the first image.
     * @param output_image Output image file.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslmathsFslOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSLMATHS_FSL_METADATA);
    const params = fslmaths_fsl_params(first_input, operations_and_inputs, output_image)
    return fslmaths_fsl_execute(params, execution);
}


export {
      FSLMATHS_FSL_METADATA,
      FslmathsFslOutputs,
      FslmathsFslParameters,
      fslmaths_fsl,
      fslmaths_fsl_params,
};
