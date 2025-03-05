// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_EASYWARP_METADATA: Metadata = {
    id: "61155dbff21df2a7da1b05052571570b740944be.boutiques",
    name: "mri_easywarp",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriEasywarpParameters {
    "__STYXTYPE__": "mri_easywarp";
    "input_image": InputPathType;
    "output_image": string;
    "deformation_field"?: InputPathType | null | undefined;
    "nearest_neighbor": boolean;
    "num_threads"?: number | null | undefined;
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
        "mri_easywarp": mri_easywarp_cargs,
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
        "mri_easywarp": mri_easywarp_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_easywarp(...)`.
 *
 * @interface
 */
interface MriEasywarpOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output deformed image
     */
    output_deformed_image: OutputPathType;
}


function mri_easywarp_params(
    input_image: InputPathType,
    output_image: string,
    deformation_field: InputPathType | null = null,
    nearest_neighbor: boolean = false,
    num_threads: number | null = null,
): MriEasywarpParameters {
    /**
     * Build parameters.
    
     * @param input_image Input image
     * @param output_image Output (deformed) image
     * @param deformation_field Deformation field
     * @param nearest_neighbor Use nearest neighbor (rather than linear) interpolation
     * @param num_threads Number of cores to be used. Default is 1. You can use -1 to use all available cores
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_easywarp" as const,
        "input_image": input_image,
        "output_image": output_image,
        "nearest_neighbor": nearest_neighbor,
    };
    if (deformation_field !== null) {
        params["deformation_field"] = deformation_field;
    }
    if (num_threads !== null) {
        params["num_threads"] = num_threads;
    }
    return params;
}


function mri_easywarp_cargs(
    params: MriEasywarpParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_easywarp");
    cargs.push(
        "--i",
        execution.inputFile((params["input_image"] ?? null))
    );
    cargs.push(
        "--o",
        (params["output_image"] ?? null)
    );
    if ((params["deformation_field"] ?? null) !== null) {
        cargs.push(
            "--field",
            execution.inputFile((params["deformation_field"] ?? null))
        );
    }
    if ((params["nearest_neighbor"] ?? null)) {
        cargs.push("--nearest");
    }
    if ((params["num_threads"] ?? null) !== null) {
        cargs.push(
            "--threads",
            String((params["num_threads"] ?? null))
        );
    }
    return cargs;
}


function mri_easywarp_outputs(
    params: MriEasywarpParameters,
    execution: Execution,
): MriEasywarpOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriEasywarpOutputs = {
        root: execution.outputFile("."),
        output_deformed_image: execution.outputFile([(params["output_image"] ?? null), ".nii.gz"].join('')),
    };
    return ret;
}


function mri_easywarp_execute(
    params: MriEasywarpParameters,
    execution: Execution,
): MriEasywarpOutputs {
    /**
     * EasyReg: deep learning registration simple and easy.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriEasywarpOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_easywarp_cargs(params, execution)
    const ret = mri_easywarp_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_easywarp(
    input_image: InputPathType,
    output_image: string,
    deformation_field: InputPathType | null = null,
    nearest_neighbor: boolean = false,
    num_threads: number | null = null,
    runner: Runner | null = null,
): MriEasywarpOutputs {
    /**
     * EasyReg: deep learning registration simple and easy.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_image Input image
     * @param output_image Output (deformed) image
     * @param deformation_field Deformation field
     * @param nearest_neighbor Use nearest neighbor (rather than linear) interpolation
     * @param num_threads Number of cores to be used. Default is 1. You can use -1 to use all available cores
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriEasywarpOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_EASYWARP_METADATA);
    const params = mri_easywarp_params(input_image, output_image, deformation_field, nearest_neighbor, num_threads)
    return mri_easywarp_execute(params, execution);
}


export {
      MRI_EASYWARP_METADATA,
      MriEasywarpOutputs,
      MriEasywarpParameters,
      mri_easywarp,
      mri_easywarp_params,
};
