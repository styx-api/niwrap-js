// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_LINEAR_ALIGN_BINARY_METADATA: Metadata = {
    id: "242145fa282d137e4b7de6e359d41edf76dd7839.boutiques",
    name: "mri_linear_align_binary",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriLinearAlignBinaryParameters {
    "__STYXTYPE__": "mri_linear_align_binary";
    "source": InputPathType;
    "target": InputPathType;
    "output_xform": string;
    "target_label"?: string | null | undefined;
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
        "mri_linear_align_binary": mri_linear_align_binary_cargs,
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
        "mri_linear_align_binary": mri_linear_align_binary_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_linear_align_binary(...)`.
 *
 * @interface
 */
interface MriLinearAlignBinaryOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output transformation file
     */
    output_xform_file: OutputPathType;
}


function mri_linear_align_binary_params(
    source: InputPathType,
    target: InputPathType,
    output_xform: string,
    target_label: string | null = null,
): MriLinearAlignBinaryParameters {
    /**
     * Build parameters.
    
     * @param source Source image file
     * @param target Target image file
     * @param output_xform Output transformation file
     * @param target_label Target label, assume source is high-resolution hippocampal labeling
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_linear_align_binary" as const,
        "source": source,
        "target": target,
        "output_xform": output_xform,
    };
    if (target_label !== null) {
        params["target_label"] = target_label;
    }
    return params;
}


function mri_linear_align_binary_cargs(
    params: MriLinearAlignBinaryParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_linear_align_binary");
    cargs.push(execution.inputFile((params["source"] ?? null)));
    cargs.push(execution.inputFile((params["target"] ?? null)));
    cargs.push((params["output_xform"] ?? null));
    if ((params["target_label"] ?? null) !== null) {
        cargs.push(
            "-h",
            (params["target_label"] ?? null)
        );
    }
    return cargs;
}


function mri_linear_align_binary_outputs(
    params: MriLinearAlignBinaryParameters,
    execution: Execution,
): MriLinearAlignBinaryOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriLinearAlignBinaryOutputs = {
        root: execution.outputFile("."),
        output_xform_file: execution.outputFile([(params["output_xform"] ?? null)].join('')),
    };
    return ret;
}


function mri_linear_align_binary_execute(
    params: MriLinearAlignBinaryParameters,
    execution: Execution,
): MriLinearAlignBinaryOutputs {
    /**
     * A tool for linear alignment of MRI images.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriLinearAlignBinaryOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_linear_align_binary_cargs(params, execution)
    const ret = mri_linear_align_binary_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_linear_align_binary(
    source: InputPathType,
    target: InputPathType,
    output_xform: string,
    target_label: string | null = null,
    runner: Runner | null = null,
): MriLinearAlignBinaryOutputs {
    /**
     * A tool for linear alignment of MRI images.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param source Source image file
     * @param target Target image file
     * @param output_xform Output transformation file
     * @param target_label Target label, assume source is high-resolution hippocampal labeling
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriLinearAlignBinaryOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_LINEAR_ALIGN_BINARY_METADATA);
    const params = mri_linear_align_binary_params(source, target, output_xform, target_label)
    return mri_linear_align_binary_execute(params, execution);
}


export {
      MRI_LINEAR_ALIGN_BINARY_METADATA,
      MriLinearAlignBinaryOutputs,
      MriLinearAlignBinaryParameters,
      mri_linear_align_binary,
      mri_linear_align_binary_params,
};
