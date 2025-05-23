// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_SHARPEN_METADATA: Metadata = {
    id: "bcc67a227d911d875ee67c8740d94a7a8b8e5f4f.boutiques",
    name: "3dSharpen",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dSharpenParameters {
    "__STYXTYPE__": "3dSharpen";
    "sharpening_factor"?: number | null | undefined;
    "input_dataset": InputPathType;
    "output_prefix": string;
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
        "3dSharpen": v_3d_sharpen_cargs,
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
        "3dSharpen": v_3d_sharpen_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_sharpen(...)`.
 *
 * @interface
 */
interface V3dSharpenOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Sharpened output dataset.
     */
    output_dataset: OutputPathType;
}


function v_3d_sharpen_params(
    input_dataset: InputPathType,
    output_prefix: string,
    sharpening_factor: number | null = null,
): V3dSharpenParameters {
    /**
     * Build parameters.
    
     * @param input_dataset Input dataset (e.g., input.nii.gz)
     * @param output_prefix Name of the output dataset (e.g., output.nii.gz) which will be in floating point format.
     * @param sharpening_factor Sharpening factor, between 0.1 and 0.9 (inclusive). Larger values mean more sharpening.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dSharpen" as const,
        "input_dataset": input_dataset,
        "output_prefix": output_prefix,
    };
    if (sharpening_factor !== null) {
        params["sharpening_factor"] = sharpening_factor;
    }
    return params;
}


function v_3d_sharpen_cargs(
    params: V3dSharpenParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dSharpen");
    if ((params["sharpening_factor"] ?? null) !== null) {
        cargs.push(
            "-phi",
            String((params["sharpening_factor"] ?? null))
        );
    }
    cargs.push(execution.inputFile((params["input_dataset"] ?? null)));
    cargs.push(
        "-prefix",
        (params["output_prefix"] ?? null)
    );
    return cargs;
}


function v_3d_sharpen_outputs(
    params: V3dSharpenParameters,
    execution: Execution,
): V3dSharpenOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dSharpenOutputs = {
        root: execution.outputFile("."),
        output_dataset: execution.outputFile([(params["output_prefix"] ?? null), ".nii.gz"].join('')),
    };
    return ret;
}


function v_3d_sharpen_execute(
    params: V3dSharpenParameters,
    execution: Execution,
): V3dSharpenOutputs {
    /**
     * Applies a simple 3D sharpening filter to the positive values in the #0 volume of the input dataset, and writes out a new dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dSharpenOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_sharpen_cargs(params, execution)
    const ret = v_3d_sharpen_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_sharpen(
    input_dataset: InputPathType,
    output_prefix: string,
    sharpening_factor: number | null = null,
    runner: Runner | null = null,
): V3dSharpenOutputs {
    /**
     * Applies a simple 3D sharpening filter to the positive values in the #0 volume of the input dataset, and writes out a new dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_dataset Input dataset (e.g., input.nii.gz)
     * @param output_prefix Name of the output dataset (e.g., output.nii.gz) which will be in floating point format.
     * @param sharpening_factor Sharpening factor, between 0.1 and 0.9 (inclusive). Larger values mean more sharpening.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dSharpenOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_SHARPEN_METADATA);
    const params = v_3d_sharpen_params(input_dataset, output_prefix, sharpening_factor)
    return v_3d_sharpen_execute(params, execution);
}


export {
      V3dSharpenOutputs,
      V3dSharpenParameters,
      V_3D_SHARPEN_METADATA,
      v_3d_sharpen,
      v_3d_sharpen_params,
};
