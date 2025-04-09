// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const UNIQ_IMAGES_METADATA: Metadata = {
    id: "c07bc3b4b116658ca0c5dfc0c96a9903033bb6fc.boutiques",
    name: "uniq_images",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface UniqImagesParameters {
    "__STYXTYPE__": "uniq_images";
    "input_files": Array<InputPathType>;
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
        "uniq_images": uniq_images_cargs,
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
        "uniq_images": uniq_images_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `uniq_images(...)`.
 *
 * @interface
 */
interface UniqImagesOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Generated list of filenames with unique images
     */
    unique_files_list: OutputPathType;
}


function uniq_images_params(
    input_files: Array<InputPathType>,
): UniqImagesParameters {
    /**
     * Build parameters.
    
     * @param input_files List of image filenames to be processed
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "uniq_images" as const,
        "input_files": input_files,
    };
    return params;
}


function uniq_images_cargs(
    params: UniqImagesParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("uniq_images");
    cargs.push(...(params["input_files"] ?? null).map(f => execution.inputFile(f)));
    return cargs;
}


function uniq_images_outputs(
    params: UniqImagesParameters,
    execution: Execution,
): UniqImagesOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: UniqImagesOutputs = {
        root: execution.outputFile("."),
        unique_files_list: execution.outputFile(["unique_images_list.txt"].join('')),
    };
    return ret;
}


function uniq_images_execute(
    params: UniqImagesParameters,
    execution: Execution,
): UniqImagesOutputs {
    /**
     * Simple program to read in a list of image filenames, determine which files have unique images inside, and echo out only a list of the filenames with unique images.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `UniqImagesOutputs`).
     */
    params = execution.params(params)
    const cargs = uniq_images_cargs(params, execution)
    const ret = uniq_images_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function uniq_images(
    input_files: Array<InputPathType>,
    runner: Runner | null = null,
): UniqImagesOutputs {
    /**
     * Simple program to read in a list of image filenames, determine which files have unique images inside, and echo out only a list of the filenames with unique images.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_files List of image filenames to be processed
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `UniqImagesOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(UNIQ_IMAGES_METADATA);
    const params = uniq_images_params(input_files)
    return uniq_images_execute(params, execution);
}


export {
      UNIQ_IMAGES_METADATA,
      UniqImagesOutputs,
      UniqImagesParameters,
      uniq_images,
      uniq_images_params,
};
