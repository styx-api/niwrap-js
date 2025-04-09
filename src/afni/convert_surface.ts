// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CONVERT_SURFACE_METADATA: Metadata = {
    id: "d48b4e88fa9598a23318fbc071216469e4145c7f.boutiques",
    name: "ConvertSurface",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface ConvertSurfaceParameters {
    "__STYXTYPE__": "ConvertSurface";
    "input_surface": string;
    "output_surface": string;
    "surface_volume"?: string | null | undefined;
    "transform_tlrc": boolean;
    "mni_rai": boolean;
    "mni_lpi": boolean;
    "xmat_1D"?: string | null | undefined;
    "ixmat_1D"?: string | null | undefined;
    "seed"?: string | null | undefined;
    "native": boolean;
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
        "ConvertSurface": convert_surface_cargs,
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
        "ConvertSurface": convert_surface_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `convert_surface(...)`.
 *
 * @interface
 */
interface ConvertSurfaceOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The converted output surface file.
     */
    output_surface_file: OutputPathType;
}


function convert_surface_params(
    input_surface: string,
    output_surface: string,
    surface_volume: string | null = null,
    transform_tlrc: boolean = false,
    mni_rai: boolean = false,
    mni_lpi: boolean = false,
    xmat_1_d: string | null = null,
    ixmat_1_d: string | null = null,
    seed: string | null = null,
    native: boolean = false,
): ConvertSurfaceParameters {
    /**
     * Build parameters.
    
     * @param input_surface Specifies the input surface.
     * @param output_surface Specifies the output surface.
     * @param surface_volume Specifies a surface volume.
     * @param transform_tlrc Apply Talairach transform.
     * @param mni_rai Turn AFNI tlrc coordinates (RAI) into MNI coord space in RAI.
     * @param mni_lpi Turn AFNI tlrc coordinates (RAI) into MNI coord space in LPI.
     * @param xmat_1_d Apply transformation specified in 1D file.
     * @param ixmat_1_d Apply inverse transformation specified in 1D file.
     * @param seed Specify SEED to seed the random number generator for random matrix generation.
     * @param native Write the output surface in the coordinate system native to its format.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "ConvertSurface" as const,
        "input_surface": input_surface,
        "output_surface": output_surface,
        "transform_tlrc": transform_tlrc,
        "mni_rai": mni_rai,
        "mni_lpi": mni_lpi,
        "native": native,
    };
    if (surface_volume !== null) {
        params["surface_volume"] = surface_volume;
    }
    if (xmat_1_d !== null) {
        params["xmat_1D"] = xmat_1_d;
    }
    if (ixmat_1_d !== null) {
        params["ixmat_1D"] = ixmat_1_d;
    }
    if (seed !== null) {
        params["seed"] = seed;
    }
    return params;
}


function convert_surface_cargs(
    params: ConvertSurfaceParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("ConvertSurface");
    cargs.push(
        "-i",
        (params["input_surface"] ?? null)
    );
    cargs.push(
        "-o",
        (params["output_surface"] ?? null)
    );
    if ((params["surface_volume"] ?? null) !== null) {
        cargs.push(
            "-sv",
            (params["surface_volume"] ?? null)
        );
    }
    if ((params["transform_tlrc"] ?? null)) {
        cargs.push("-tlrc");
    }
    if ((params["mni_rai"] ?? null)) {
        cargs.push("-MNI_rai");
    }
    if ((params["mni_lpi"] ?? null)) {
        cargs.push("-MNI_lpi");
    }
    if ((params["xmat_1D"] ?? null) !== null) {
        cargs.push(
            "-xmat_1D",
            (params["xmat_1D"] ?? null)
        );
    }
    if ((params["ixmat_1D"] ?? null) !== null) {
        cargs.push(
            "-ixmat_1D",
            (params["ixmat_1D"] ?? null)
        );
    }
    if ((params["seed"] ?? null) !== null) {
        cargs.push(
            "-seed",
            (params["seed"] ?? null)
        );
    }
    if ((params["native"] ?? null)) {
        cargs.push("-native");
    }
    return cargs;
}


function convert_surface_outputs(
    params: ConvertSurfaceParameters,
    execution: Execution,
): ConvertSurfaceOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ConvertSurfaceOutputs = {
        root: execution.outputFile("."),
        output_surface_file: execution.outputFile([(params["output_surface"] ?? null)].join('')),
    };
    return ret;
}


function convert_surface_execute(
    params: ConvertSurfaceParameters,
    execution: Execution,
): ConvertSurfaceOutputs {
    /**
     * Reads in a surface and writes it out in another format. Only fields pertinent to SUMA are preserved.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ConvertSurfaceOutputs`).
     */
    params = execution.params(params)
    const cargs = convert_surface_cargs(params, execution)
    const ret = convert_surface_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function convert_surface(
    input_surface: string,
    output_surface: string,
    surface_volume: string | null = null,
    transform_tlrc: boolean = false,
    mni_rai: boolean = false,
    mni_lpi: boolean = false,
    xmat_1_d: string | null = null,
    ixmat_1_d: string | null = null,
    seed: string | null = null,
    native: boolean = false,
    runner: Runner | null = null,
): ConvertSurfaceOutputs {
    /**
     * Reads in a surface and writes it out in another format. Only fields pertinent to SUMA are preserved.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_surface Specifies the input surface.
     * @param output_surface Specifies the output surface.
     * @param surface_volume Specifies a surface volume.
     * @param transform_tlrc Apply Talairach transform.
     * @param mni_rai Turn AFNI tlrc coordinates (RAI) into MNI coord space in RAI.
     * @param mni_lpi Turn AFNI tlrc coordinates (RAI) into MNI coord space in LPI.
     * @param xmat_1_d Apply transformation specified in 1D file.
     * @param ixmat_1_d Apply inverse transformation specified in 1D file.
     * @param seed Specify SEED to seed the random number generator for random matrix generation.
     * @param native Write the output surface in the coordinate system native to its format.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ConvertSurfaceOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CONVERT_SURFACE_METADATA);
    const params = convert_surface_params(input_surface, output_surface, surface_volume, transform_tlrc, mni_rai, mni_lpi, xmat_1_d, ixmat_1_d, seed, native)
    return convert_surface_execute(params, execution);
}


export {
      CONVERT_SURFACE_METADATA,
      ConvertSurfaceOutputs,
      ConvertSurfaceParameters,
      convert_surface,
      convert_surface_params,
};
