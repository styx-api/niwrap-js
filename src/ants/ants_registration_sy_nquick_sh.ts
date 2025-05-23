// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ANTS_REGISTRATION_SY_NQUICK_SH_METADATA: Metadata = {
    id: "3b54d6da6abd35cf6bc2b0a69c51979f6dbe15d1.boutiques",
    name: "antsRegistrationSyNQuick.sh",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface AntsRegistrationSyNquickShParameters {
    "__STYXTYPE__": "antsRegistrationSyNQuick.sh";
    "dimensionality": 2 | 3;
    "fixed_image": InputPathType;
    "moving_image": InputPathType;
    "output_prefix": string;
    "transform_type"?: "s" | "b" | null | undefined;
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
        "antsRegistrationSyNQuick.sh": ants_registration_sy_nquick_sh_cargs,
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
        "antsRegistrationSyNQuick.sh": ants_registration_sy_nquick_sh_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `ants_registration_sy_nquick_sh(...)`.
 *
 * @interface
 */
interface AntsRegistrationSyNquickShOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Affine transformation matrix resulting from registration.
     */
    output_transform: OutputPathType;
    /**
     * Warp field resulting from the registration.
     */
    output_warp: OutputPathType;
    /**
     * Inverse warp field resulting from the registration.
     */
    output_inverse_warp: OutputPathType;
    /**
     * Warped moving image.
     */
    output_warped_image: OutputPathType;
}


function ants_registration_sy_nquick_sh_params(
    dimensionality: 2 | 3,
    fixed_image: InputPathType,
    moving_image: InputPathType,
    output_prefix: string,
    transform_type: "s" | "b" | null = null,
): AntsRegistrationSyNquickShParameters {
    /**
     * Build parameters.
    
     * @param dimensionality Dimensionality of the images (2 or 3).
     * @param fixed_image Fixed image to which the moving image is registered.
     * @param moving_image Moving image that is registered to the fixed image.
     * @param output_prefix Prefix for the output files.
     * @param transform_type Type of transform: 's' for SyN, 'b' for B-spline SyN. Default is 's'.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "antsRegistrationSyNQuick.sh" as const,
        "dimensionality": dimensionality,
        "fixed_image": fixed_image,
        "moving_image": moving_image,
        "output_prefix": output_prefix,
    };
    if (transform_type !== null) {
        params["transform_type"] = transform_type;
    }
    return params;
}


function ants_registration_sy_nquick_sh_cargs(
    params: AntsRegistrationSyNquickShParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("antsRegistrationSyNQuick.sh");
    cargs.push(
        "-d",
        String((params["dimensionality"] ?? null))
    );
    cargs.push(
        "-f",
        execution.inputFile((params["fixed_image"] ?? null))
    );
    cargs.push(
        "-m",
        execution.inputFile((params["moving_image"] ?? null))
    );
    cargs.push(
        "-o",
        (params["output_prefix"] ?? null)
    );
    if ((params["transform_type"] ?? null) !== null) {
        cargs.push((params["transform_type"] ?? null));
    }
    return cargs;
}


function ants_registration_sy_nquick_sh_outputs(
    params: AntsRegistrationSyNquickShParameters,
    execution: Execution,
): AntsRegistrationSyNquickShOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AntsRegistrationSyNquickShOutputs = {
        root: execution.outputFile("."),
        output_transform: execution.outputFile([(params["output_prefix"] ?? null), "0GenericAffine.mat"].join('')),
        output_warp: execution.outputFile([(params["output_prefix"] ?? null), "1Warp.nii.gz"].join('')),
        output_inverse_warp: execution.outputFile([(params["output_prefix"] ?? null), "1InverseWarp.nii.gz"].join('')),
        output_warped_image: execution.outputFile([(params["output_prefix"] ?? null), "Warped.nii.gz"].join('')),
    };
    return ret;
}


function ants_registration_sy_nquick_sh_execute(
    params: AntsRegistrationSyNquickShParameters,
    execution: Execution,
): AntsRegistrationSyNquickShOutputs {
    /**
     * A script to quickly compute a SyN-based registration between two images using ANTS.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AntsRegistrationSyNquickShOutputs`).
     */
    params = execution.params(params)
    const cargs = ants_registration_sy_nquick_sh_cargs(params, execution)
    const ret = ants_registration_sy_nquick_sh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function ants_registration_sy_nquick_sh(
    dimensionality: 2 | 3,
    fixed_image: InputPathType,
    moving_image: InputPathType,
    output_prefix: string,
    transform_type: "s" | "b" | null = null,
    runner: Runner | null = null,
): AntsRegistrationSyNquickShOutputs {
    /**
     * A script to quickly compute a SyN-based registration between two images using ANTS.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param dimensionality Dimensionality of the images (2 or 3).
     * @param fixed_image Fixed image to which the moving image is registered.
     * @param moving_image Moving image that is registered to the fixed image.
     * @param output_prefix Prefix for the output files.
     * @param transform_type Type of transform: 's' for SyN, 'b' for B-spline SyN. Default is 's'.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AntsRegistrationSyNquickShOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ANTS_REGISTRATION_SY_NQUICK_SH_METADATA);
    const params = ants_registration_sy_nquick_sh_params(dimensionality, fixed_image, moving_image, output_prefix, transform_type)
    return ants_registration_sy_nquick_sh_execute(params, execution);
}


export {
      ANTS_REGISTRATION_SY_NQUICK_SH_METADATA,
      AntsRegistrationSyNquickShOutputs,
      AntsRegistrationSyNquickShParameters,
      ants_registration_sy_nquick_sh,
      ants_registration_sy_nquick_sh_params,
};
