// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const LONGMC_METADATA: Metadata = {
    id: "a60463859b66f4dac910ccf5dd67f14573c1ca1f.boutiques",
    name: "longmc",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface LongmcParameters {
    "__STYXTYPE__": "longmc";
    "cross_tp_name": string;
    "base_name": string;
    "conform_to_hires": boolean;
    "no_conform_to_hires": boolean;
    "subjects_dir": string;
    "subject_name"?: string | null | undefined;
    "no_force_update": boolean;
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
        "longmc": longmc_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `longmc(...)`.
 *
 * @interface
 */
interface LongmcOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function longmc_params(
    cross_tp_name: string,
    base_name: string,
    subjects_dir: string,
    conform_to_hires: boolean = false,
    no_conform_to_hires: boolean = false,
    subject_name: string | null = null,
    no_force_update: boolean = false,
): LongmcParameters {
    /**
     * Build parameters.
    
     * @param cross_tp_name Cross time point name for the longitudinal analysis
     * @param base_name Base name for the longitudinal analysis
     * @param subjects_dir Set the SUBJECTS_DIR directory
     * @param conform_to_hires Option to conform input to high-resolution
     * @param no_conform_to_hires Option to not conform input to high-resolution
     * @param subject_name Subject name override, must be declared after -long
     * @param no_force_update Do not force update
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "longmc" as const,
        "cross_tp_name": cross_tp_name,
        "base_name": base_name,
        "conform_to_hires": conform_to_hires,
        "no_conform_to_hires": no_conform_to_hires,
        "subjects_dir": subjects_dir,
        "no_force_update": no_force_update,
    };
    if (subject_name !== null) {
        params["subject_name"] = subject_name;
    }
    return params;
}


function longmc_cargs(
    params: LongmcParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("longmc");
    cargs.push(
        "-long",
        (params["cross_tp_name"] ?? null)
    );
    cargs.push((params["base_name"] ?? null));
    if ((params["conform_to_hires"] ?? null)) {
        cargs.push("-conf2hires");
    }
    if ((params["no_conform_to_hires"] ?? null)) {
        cargs.push("-no-conf2hires");
    }
    cargs.push(
        "-sd",
        (params["subjects_dir"] ?? null)
    );
    if ((params["subject_name"] ?? null) !== null) {
        cargs.push(
            "-s",
            (params["subject_name"] ?? null)
        );
    }
    if ((params["no_force_update"] ?? null)) {
        cargs.push("-no-force-update");
    }
    return cargs;
}


function longmc_outputs(
    params: LongmcParameters,
    execution: Execution,
): LongmcOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: LongmcOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function longmc_execute(
    params: LongmcParameters,
    execution: Execution,
): LongmcOutputs {
    /**
     * Perform motion correction for the longitudinal recon-all stream when creating the longitudinal timepoint of a subject.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `LongmcOutputs`).
     */
    params = execution.params(params)
    const cargs = longmc_cargs(params, execution)
    const ret = longmc_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function longmc(
    cross_tp_name: string,
    base_name: string,
    subjects_dir: string,
    conform_to_hires: boolean = false,
    no_conform_to_hires: boolean = false,
    subject_name: string | null = null,
    no_force_update: boolean = false,
    runner: Runner | null = null,
): LongmcOutputs {
    /**
     * Perform motion correction for the longitudinal recon-all stream when creating the longitudinal timepoint of a subject.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param cross_tp_name Cross time point name for the longitudinal analysis
     * @param base_name Base name for the longitudinal analysis
     * @param subjects_dir Set the SUBJECTS_DIR directory
     * @param conform_to_hires Option to conform input to high-resolution
     * @param no_conform_to_hires Option to not conform input to high-resolution
     * @param subject_name Subject name override, must be declared after -long
     * @param no_force_update Do not force update
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `LongmcOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(LONGMC_METADATA);
    const params = longmc_params(cross_tp_name, base_name, subjects_dir, conform_to_hires, no_conform_to_hires, subject_name, no_force_update)
    return longmc_execute(params, execution);
}


export {
      LONGMC_METADATA,
      LongmcOutputs,
      LongmcParameters,
      longmc,
      longmc_params,
};
