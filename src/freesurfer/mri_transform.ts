// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_TRANSFORM_METADATA: Metadata = {
    id: "bc7a45fd27e432a438c7967d047a12047b926e4c.boutiques",
    name: "mri_transform",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriTransformParameters {
    "__STYXTYPE__": "mri_transform";
    "input_volume": InputPathType;
    "lta_file": InputPathType;
    "output_file": string;
    "out_like"?: InputPathType | null | undefined;
    "invert": boolean;
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
        "mri_transform": mri_transform_cargs,
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
        "mri_transform": mri_transform_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_transform(...)`.
 *
 * @interface
 */
interface MriTransformOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Transformed output volume
     */
    transformed_output: OutputPathType;
}


function mri_transform_params(
    input_volume: InputPathType,
    lta_file: InputPathType,
    output_file: string,
    out_like: InputPathType | null = null,
    invert: boolean = false,
): MriTransformParameters {
    /**
     * Build parameters.
    
     * @param input_volume Input MRI volume
     * @param lta_file Linear Transform Array (LTA) file
     * @param output_file Output file for the transformed MRI volume
     * @param out_like Set output volume parameters like the reference volume
     * @param invert Invert transform coordinates
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_transform" as const,
        "input_volume": input_volume,
        "lta_file": lta_file,
        "output_file": output_file,
        "invert": invert,
    };
    if (out_like !== null) {
        params["out_like"] = out_like;
    }
    return params;
}


function mri_transform_cargs(
    params: MriTransformParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_transform");
    cargs.push(execution.inputFile((params["input_volume"] ?? null)));
    cargs.push(execution.inputFile((params["lta_file"] ?? null)));
    cargs.push((params["output_file"] ?? null));
    if ((params["out_like"] ?? null) !== null) {
        cargs.push(
            "-out_like",
            execution.inputFile((params["out_like"] ?? null))
        );
    }
    if ((params["invert"] ?? null)) {
        cargs.push("-I");
    }
    return cargs;
}


function mri_transform_outputs(
    params: MriTransformParameters,
    execution: Execution,
): MriTransformOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriTransformOutputs = {
        root: execution.outputFile("."),
        transformed_output: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function mri_transform_execute(
    params: MriTransformParameters,
    execution: Execution,
): MriTransformOutputs {
    /**
     * Applies a linear transform to an MRI volume and writes out the result.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriTransformOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_transform_cargs(params, execution)
    const ret = mri_transform_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_transform(
    input_volume: InputPathType,
    lta_file: InputPathType,
    output_file: string,
    out_like: InputPathType | null = null,
    invert: boolean = false,
    runner: Runner | null = null,
): MriTransformOutputs {
    /**
     * Applies a linear transform to an MRI volume and writes out the result.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_volume Input MRI volume
     * @param lta_file Linear Transform Array (LTA) file
     * @param output_file Output file for the transformed MRI volume
     * @param out_like Set output volume parameters like the reference volume
     * @param invert Invert transform coordinates
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriTransformOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_TRANSFORM_METADATA);
    const params = mri_transform_params(input_volume, lta_file, output_file, out_like, invert)
    return mri_transform_execute(params, execution);
}


export {
      MRI_TRANSFORM_METADATA,
      MriTransformOutputs,
      MriTransformParameters,
      mri_transform,
      mri_transform_params,
};
