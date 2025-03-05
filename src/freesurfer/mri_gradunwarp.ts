// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_GRADUNWARP_METADATA: Metadata = {
    id: "b0cc1536d78ca9cef5fa233e1c04b509599e2a82.boutiques",
    name: "mri_gradunwarp",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriGradunwarpParameters {
    "__STYXTYPE__": "mri_gradunwarp";
    "gradient_coeff"?: InputPathType | null | undefined;
    "load_transtbl"?: InputPathType | null | undefined;
    "input_file": InputPathType;
    "output_file"?: string | null | undefined;
    "out_transtbl"?: string | null | undefined;
    "save_transtbl_only": boolean;
    "interpolation_type"?: string | null | undefined;
    "nthreads"?: number | null | undefined;
    "checkopts": boolean;
    "version": boolean;
    "help": boolean;
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
        "mri_gradunwarp": mri_gradunwarp_cargs,
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
        "mri_gradunwarp": mri_gradunwarp_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_gradunwarp(...)`.
 *
 * @interface
 */
interface MriGradunwarpOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Unwarped output volume or surface
     */
    unwarped_output: OutputPathType | null;
    /**
     * Saved unwarp transform table in m3z format
     */
    output_transform_table: OutputPathType | null;
}


function mri_gradunwarp_params(
    input_file: InputPathType,
    gradient_coeff: InputPathType | null = null,
    load_transtbl: InputPathType | null = null,
    output_file: string | null = null,
    out_transtbl: string | null = null,
    save_transtbl_only: boolean = false,
    interpolation_type: string | null = "trilinear",
    nthreads: number | null = null,
    checkopts: boolean = false,
    version: boolean = false,
    help: boolean = false,
): MriGradunwarpParameters {
    /**
     * Build parameters.
    
     * @param input_file Input warped volume or surface
     * @param gradient_coeff Gradient coefficient input file (not to be used with --load_transtbl)
     * @param load_transtbl Load unwarp transform table in m3z format (not to be used with --gradcoeff)
     * @param output_file Output unwarped volume or surface
     * @param out_transtbl Save unwarp transform table in m3z format
     * @param save_transtbl_only Just save unwarp transform table in m3z format, requires --gradcoeff
     * @param interpolation_type Interpolation method: nearest | trilinear | cubic (default is trilinear)
     * @param nthreads Number of threads to run
     * @param checkopts Don't run anything, just check options and exit
     * @param version Print out version and exit
     * @param help Print out information on how to use this program
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_gradunwarp" as const,
        "input_file": input_file,
        "save_transtbl_only": save_transtbl_only,
        "checkopts": checkopts,
        "version": version,
        "help": help,
    };
    if (gradient_coeff !== null) {
        params["gradient_coeff"] = gradient_coeff;
    }
    if (load_transtbl !== null) {
        params["load_transtbl"] = load_transtbl;
    }
    if (output_file !== null) {
        params["output_file"] = output_file;
    }
    if (out_transtbl !== null) {
        params["out_transtbl"] = out_transtbl;
    }
    if (interpolation_type !== null) {
        params["interpolation_type"] = interpolation_type;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    return params;
}


function mri_gradunwarp_cargs(
    params: MriGradunwarpParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_gradunwarp");
    if ((params["gradient_coeff"] ?? null) !== null) {
        cargs.push(
            "--gradcoeff",
            execution.inputFile((params["gradient_coeff"] ?? null))
        );
    }
    if ((params["load_transtbl"] ?? null) !== null) {
        cargs.push(
            "--load_transtbl",
            execution.inputFile((params["load_transtbl"] ?? null))
        );
    }
    cargs.push(
        "--i",
        execution.inputFile((params["input_file"] ?? null))
    );
    if ((params["output_file"] ?? null) !== null) {
        cargs.push(
            "--o",
            (params["output_file"] ?? null)
        );
    }
    if ((params["out_transtbl"] ?? null) !== null) {
        cargs.push(
            "--out_transtbl",
            (params["out_transtbl"] ?? null)
        );
    }
    if ((params["save_transtbl_only"] ?? null)) {
        cargs.push("--save_transtbl_only");
    }
    if ((params["interpolation_type"] ?? null) !== null) {
        cargs.push(
            "--interp",
            (params["interpolation_type"] ?? null)
        );
    }
    if ((params["nthreads"] ?? null) !== null) {
        cargs.push(
            "--nthreads",
            String((params["nthreads"] ?? null))
        );
    }
    if ((params["checkopts"] ?? null)) {
        cargs.push("--checkopts");
    }
    if ((params["version"] ?? null)) {
        cargs.push("--version");
    }
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function mri_gradunwarp_outputs(
    params: MriGradunwarpParameters,
    execution: Execution,
): MriGradunwarpOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriGradunwarpOutputs = {
        root: execution.outputFile("."),
        unwarped_output: ((params["output_file"] ?? null) !== null) ? execution.outputFile([(params["output_file"] ?? null)].join('')) : null,
        output_transform_table: ((params["out_transtbl"] ?? null) !== null) ? execution.outputFile([(params["out_transtbl"] ?? null)].join('')) : null,
    };
    return ret;
}


function mri_gradunwarp_execute(
    params: MriGradunwarpParameters,
    execution: Execution,
): MriGradunwarpOutputs {
    /**
     * Tool to correct gradient non-linearity distortions in MRI images.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriGradunwarpOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_gradunwarp_cargs(params, execution)
    const ret = mri_gradunwarp_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_gradunwarp(
    input_file: InputPathType,
    gradient_coeff: InputPathType | null = null,
    load_transtbl: InputPathType | null = null,
    output_file: string | null = null,
    out_transtbl: string | null = null,
    save_transtbl_only: boolean = false,
    interpolation_type: string | null = "trilinear",
    nthreads: number | null = null,
    checkopts: boolean = false,
    version: boolean = false,
    help: boolean = false,
    runner: Runner | null = null,
): MriGradunwarpOutputs {
    /**
     * Tool to correct gradient non-linearity distortions in MRI images.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_file Input warped volume or surface
     * @param gradient_coeff Gradient coefficient input file (not to be used with --load_transtbl)
     * @param load_transtbl Load unwarp transform table in m3z format (not to be used with --gradcoeff)
     * @param output_file Output unwarped volume or surface
     * @param out_transtbl Save unwarp transform table in m3z format
     * @param save_transtbl_only Just save unwarp transform table in m3z format, requires --gradcoeff
     * @param interpolation_type Interpolation method: nearest | trilinear | cubic (default is trilinear)
     * @param nthreads Number of threads to run
     * @param checkopts Don't run anything, just check options and exit
     * @param version Print out version and exit
     * @param help Print out information on how to use this program
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriGradunwarpOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_GRADUNWARP_METADATA);
    const params = mri_gradunwarp_params(input_file, gradient_coeff, load_transtbl, output_file, out_transtbl, save_transtbl_only, interpolation_type, nthreads, checkopts, version, help)
    return mri_gradunwarp_execute(params, execution);
}


export {
      MRI_GRADUNWARP_METADATA,
      MriGradunwarpOutputs,
      MriGradunwarpParameters,
      mri_gradunwarp,
      mri_gradunwarp_params,
};
