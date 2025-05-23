// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const NSIZE_METADATA: Metadata = {
    id: "a9d2ae05ed0705b6b163c901233146b3b789bc31.boutiques",
    name: "nsize",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface NsizeParameters {
    "__STYXTYPE__": "nsize";
    "image_in": InputPathType;
    "image_out": string;
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
        "nsize": nsize_cargs,
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
        "nsize": nsize_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `nsize(...)`.
 *
 * @interface
 */
interface NsizeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Zero padded output image file
     */
    image_out_file: OutputPathType;
}


function nsize_params(
    image_in: InputPathType,
    image_out: string,
): NsizeParameters {
    /**
     * Build parameters.
    
     * @param image_in Input image file
     * @param image_out Output padded image file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "nsize" as const,
        "image_in": image_in,
        "image_out": image_out,
    };
    return params;
}


function nsize_cargs(
    params: NsizeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("nsize");
    cargs.push(execution.inputFile((params["image_in"] ?? null)));
    cargs.push((params["image_out"] ?? null));
    return cargs;
}


function nsize_outputs(
    params: NsizeParameters,
    execution: Execution,
): NsizeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: NsizeOutputs = {
        root: execution.outputFile("."),
        image_out_file: execution.outputFile([(params["image_out"] ?? null)].join('')),
    };
    return ret;
}


function nsize_execute(
    params: NsizeParameters,
    execution: Execution,
): NsizeOutputs {
    /**
     * Zero pads an input image to the nearest larger NxN dimensions.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `NsizeOutputs`).
     */
    params = execution.params(params)
    const cargs = nsize_cargs(params, execution)
    const ret = nsize_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function nsize(
    image_in: InputPathType,
    image_out: string,
    runner: Runner | null = null,
): NsizeOutputs {
    /**
     * Zero pads an input image to the nearest larger NxN dimensions.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param image_in Input image file
     * @param image_out Output padded image file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `NsizeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(NSIZE_METADATA);
    const params = nsize_params(image_in, image_out)
    return nsize_execute(params, execution);
}


export {
      NSIZE_METADATA,
      NsizeOutputs,
      NsizeParameters,
      nsize,
      nsize_params,
};
