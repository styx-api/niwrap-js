// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_COMPUTE_VOLUME_FRACTIONS_METADATA: Metadata = {
    id: "02961ba1db8b265f07c25a08461891b1caa9c54c.boutiques",
    name: "mris_compute_volume_fractions",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisComputeVolumeFractionsParameters {
    "__STYXTYPE__": "mris_compute_volume_fractions";
    "volume_file": InputPathType;
    "surface_file": InputPathType;
    "accuracy": number;
    "output_file": string;
    "debug": boolean;
    "checkopts": boolean;
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
        "mris_compute_volume_fractions": mris_compute_volume_fractions_cargs,
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
        "mris_compute_volume_fractions": mris_compute_volume_fractions_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_compute_volume_fractions(...)`.
 *
 * @interface
 */
interface MrisComputeVolumeFractionsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output volume file containing the computed fractions.
     */
    output_volume_file: OutputPathType;
}


function mris_compute_volume_fractions_params(
    volume_file: InputPathType,
    surface_file: InputPathType,
    accuracy: number,
    output_file: string,
    debug: boolean = false,
    checkopts: boolean = false,
): MrisComputeVolumeFractionsParameters {
    /**
     * Build parameters.
    
     * @param volume_file Input volume file.
     * @param surface_file Input surface file.
     * @param accuracy Required accuracy.
     * @param output_file Output volume file for the fractions.
     * @param debug Turn on debugging.
     * @param checkopts Don't run anything, just check options and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_compute_volume_fractions" as const,
        "volume_file": volume_file,
        "surface_file": surface_file,
        "accuracy": accuracy,
        "output_file": output_file,
        "debug": debug,
        "checkopts": checkopts,
    };
    return params;
}


function mris_compute_volume_fractions_cargs(
    params: MrisComputeVolumeFractionsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_compute_volume_fractions");
    cargs.push(
        "--vol",
        execution.inputFile((params["volume_file"] ?? null))
    );
    cargs.push(
        "--surf",
        execution.inputFile((params["surface_file"] ?? null))
    );
    cargs.push(
        "--acc",
        String((params["accuracy"] ?? null))
    );
    cargs.push(
        "--out",
        (params["output_file"] ?? null)
    );
    if ((params["debug"] ?? null)) {
        cargs.push("--debug");
    }
    if ((params["checkopts"] ?? null)) {
        cargs.push("--checkopts");
    }
    return cargs;
}


function mris_compute_volume_fractions_outputs(
    params: MrisComputeVolumeFractionsParameters,
    execution: Execution,
): MrisComputeVolumeFractionsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisComputeVolumeFractionsOutputs = {
        root: execution.outputFile("."),
        output_volume_file: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function mris_compute_volume_fractions_execute(
    params: MrisComputeVolumeFractionsParameters,
    execution: Execution,
): MrisComputeVolumeFractionsOutputs {
    /**
     * Computes volume fractions based on a given surface and volume.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisComputeVolumeFractionsOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_compute_volume_fractions_cargs(params, execution)
    const ret = mris_compute_volume_fractions_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_compute_volume_fractions(
    volume_file: InputPathType,
    surface_file: InputPathType,
    accuracy: number,
    output_file: string,
    debug: boolean = false,
    checkopts: boolean = false,
    runner: Runner | null = null,
): MrisComputeVolumeFractionsOutputs {
    /**
     * Computes volume fractions based on a given surface and volume.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param volume_file Input volume file.
     * @param surface_file Input surface file.
     * @param accuracy Required accuracy.
     * @param output_file Output volume file for the fractions.
     * @param debug Turn on debugging.
     * @param checkopts Don't run anything, just check options and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisComputeVolumeFractionsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_COMPUTE_VOLUME_FRACTIONS_METADATA);
    const params = mris_compute_volume_fractions_params(volume_file, surface_file, accuracy, output_file, debug, checkopts)
    return mris_compute_volume_fractions_execute(params, execution);
}


export {
      MRIS_COMPUTE_VOLUME_FRACTIONS_METADATA,
      MrisComputeVolumeFractionsOutputs,
      MrisComputeVolumeFractionsParameters,
      mris_compute_volume_fractions,
      mris_compute_volume_fractions_params,
};
