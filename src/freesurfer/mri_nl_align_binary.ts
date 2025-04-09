// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_NL_ALIGN_BINARY_METADATA: Metadata = {
    id: "db35b86c7dfdacdf01045211d3cb59f64aef4fc3.boutiques",
    name: "mri_nl_align_binary",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriNlAlignBinaryParameters {
    "__STYXTYPE__": "mri_nl_align_binary";
    "source_file": InputPathType;
    "target_file": InputPathType;
    "warp_file": string;
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
        "mri_nl_align_binary": mri_nl_align_binary_cargs,
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
        "mri_nl_align_binary": mri_nl_align_binary_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_nl_align_binary(...)`.
 *
 * @interface
 */
interface MriNlAlignBinaryOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output warp from the alignment process
     */
    output_warp: OutputPathType;
}


function mri_nl_align_binary_params(
    source_file: InputPathType,
    target_file: InputPathType,
    warp_file: string,
): MriNlAlignBinaryParameters {
    /**
     * Build parameters.
    
     * @param source_file Source image file for alignment
     * @param target_file Target image file for alignment
     * @param warp_file Output warp file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_nl_align_binary" as const,
        "source_file": source_file,
        "target_file": target_file,
        "warp_file": warp_file,
    };
    return params;
}


function mri_nl_align_binary_cargs(
    params: MriNlAlignBinaryParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_nl_align_binary");
    cargs.push(execution.inputFile((params["source_file"] ?? null)));
    cargs.push(execution.inputFile((params["target_file"] ?? null)));
    cargs.push((params["warp_file"] ?? null));
    return cargs;
}


function mri_nl_align_binary_outputs(
    params: MriNlAlignBinaryParameters,
    execution: Execution,
): MriNlAlignBinaryOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriNlAlignBinaryOutputs = {
        root: execution.outputFile("."),
        output_warp: execution.outputFile([(params["warp_file"] ?? null)].join('')),
    };
    return ret;
}


function mri_nl_align_binary_execute(
    params: MriNlAlignBinaryParameters,
    execution: Execution,
): MriNlAlignBinaryOutputs {
    /**
     * Non-linear alignment tool for MRI data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriNlAlignBinaryOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_nl_align_binary_cargs(params, execution)
    const ret = mri_nl_align_binary_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_nl_align_binary(
    source_file: InputPathType,
    target_file: InputPathType,
    warp_file: string,
    runner: Runner | null = null,
): MriNlAlignBinaryOutputs {
    /**
     * Non-linear alignment tool for MRI data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param source_file Source image file for alignment
     * @param target_file Target image file for alignment
     * @param warp_file Output warp file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriNlAlignBinaryOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_NL_ALIGN_BINARY_METADATA);
    const params = mri_nl_align_binary_params(source_file, target_file, warp_file)
    return mri_nl_align_binary_execute(params, execution);
}


export {
      MRI_NL_ALIGN_BINARY_METADATA,
      MriNlAlignBinaryOutputs,
      MriNlAlignBinaryParameters,
      mri_nl_align_binary,
      mri_nl_align_binary_params,
};
