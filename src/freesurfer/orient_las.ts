// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ORIENT_LAS_METADATA: Metadata = {
    id: "b3e62899eafe42b95670c2b16590844cb54f8b91.boutiques",
    name: "orientLAS",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface OrientLasParameters {
    "__STYXTYPE__": "orientLAS";
    "input_image": InputPathType;
    "output_image": string;
    "check": boolean;
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
        "orientLAS": orient_las_cargs,
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
        "orientLAS": orient_las_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `orient_las(...)`.
 *
 * @interface
 */
interface OrientLasOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output image with LAS orientation
     */
    output_las_image: OutputPathType;
}


function orient_las_params(
    input_image: InputPathType,
    output_image: string,
    check: boolean = false,
): OrientLasParameters {
    /**
     * Build parameters.
    
     * @param input_image Input image in NIfTI format
     * @param output_image Output image in NIfTI format with LAS orientation
     * @param check Check the match of input and output images using tkregister, and for diffusion data, run dtifit and show tensors with fslview
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "orientLAS" as const,
        "input_image": input_image,
        "output_image": output_image,
        "check": check,
    };
    return params;
}


function orient_las_cargs(
    params: OrientLasParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("orientLAS");
    cargs.push(execution.inputFile((params["input_image"] ?? null)));
    cargs.push((params["output_image"] ?? null));
    if ((params["check"] ?? null)) {
        cargs.push("--check");
    }
    return cargs;
}


function orient_las_outputs(
    params: OrientLasParameters,
    execution: Execution,
): OrientLasOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: OrientLasOutputs = {
        root: execution.outputFile("."),
        output_las_image: execution.outputFile([(params["output_image"] ?? null)].join('')),
    };
    return ret;
}


function orient_las_execute(
    params: OrientLasParameters,
    execution: Execution,
): OrientLasOutputs {
    /**
     * Convert image to LAS orientation.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `OrientLasOutputs`).
     */
    params = execution.params(params)
    const cargs = orient_las_cargs(params, execution)
    const ret = orient_las_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function orient_las(
    input_image: InputPathType,
    output_image: string,
    check: boolean = false,
    runner: Runner | null = null,
): OrientLasOutputs {
    /**
     * Convert image to LAS orientation.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_image Input image in NIfTI format
     * @param output_image Output image in NIfTI format with LAS orientation
     * @param check Check the match of input and output images using tkregister, and for diffusion data, run dtifit and show tensors with fslview
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `OrientLasOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ORIENT_LAS_METADATA);
    const params = orient_las_params(input_image, output_image, check)
    return orient_las_execute(params, execution);
}


export {
      ORIENT_LAS_METADATA,
      OrientLasOutputs,
      OrientLasParameters,
      orient_las,
      orient_las_params,
};
