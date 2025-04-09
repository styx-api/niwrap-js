// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MAKE_AVERAGE_VOLUME_METADATA: Metadata = {
    id: "d5918126931a1262771808902f81e13cdc611a10.boutiques",
    name: "make_average_volume",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MakeAverageVolumeParameters {
    "__STYXTYPE__": "make_average_volume";
    "subjects": Array<string>;
    "fsgd"?: InputPathType | null | undefined;
    "out"?: string | null | undefined;
    "topdir"?: string | null | undefined;
    "xform"?: string | null | undefined;
    "sdir"?: string | null | undefined;
    "sd_flag": boolean;
    "force_flag": boolean;
    "keep_all_orig_flag": boolean;
    "no_aseg_flag": boolean;
    "ctab"?: string | null | undefined;
    "ctab_default_flag": boolean;
    "echo_flag": boolean;
    "debug_flag": boolean;
    "nocleanup_flag": boolean;
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
        "make_average_volume": make_average_volume_cargs,
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
 * Output object returned when calling `make_average_volume(...)`.
 *
 * @interface
 */
interface MakeAverageVolumeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function make_average_volume_params(
    subjects: Array<string>,
    fsgd: InputPathType | null = null,
    out: string | null = null,
    topdir: string | null = null,
    xform: string | null = null,
    sdir: string | null = null,
    sd_flag: boolean = false,
    force_flag: boolean = false,
    keep_all_orig_flag: boolean = false,
    no_aseg_flag: boolean = false,
    ctab: string | null = null,
    ctab_default_flag: boolean = false,
    echo_flag: boolean = false,
    debug_flag: boolean = false,
    nocleanup_flag: boolean = false,
): MakeAverageVolumeParameters {
    /**
     * Build parameters.
    
     * @param subjects List of subjects to include in the average.
     * @param fsgd File containing subject list for averaging.
     * @param out Output average subject name. Default is 'average'.
     * @param topdir Directory to put data and link to SUBJECTS_DIR.
     * @param xform Transformation name to use, default is talairach.xfm.
     * @param sdir Use specified SUBJECTS_DIR instead of the environment's one.
     * @param sd_flag Same as --sdir.
     * @param force_flag Overwrite existing average subject data.
     * @param keep_all_orig_flag Concatenate all original volumes into mri/orig.all.mgz.
     * @param no_aseg_flag Do not create 'average' aseg.
     * @param ctab Embed colortable into segmentations.
     * @param ctab_default_flag Embed FreeSurferColorLUT.txt into segmentations.
     * @param echo_flag Enable command echo for debugging.
     * @param debug_flag Same as --echo for debugging.
     * @param nocleanup_flag Do not delete temporary files.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "make_average_volume" as const,
        "subjects": subjects,
        "sd_flag": sd_flag,
        "force_flag": force_flag,
        "keep_all_orig_flag": keep_all_orig_flag,
        "no_aseg_flag": no_aseg_flag,
        "ctab_default_flag": ctab_default_flag,
        "echo_flag": echo_flag,
        "debug_flag": debug_flag,
        "nocleanup_flag": nocleanup_flag,
    };
    if (fsgd !== null) {
        params["fsgd"] = fsgd;
    }
    if (out !== null) {
        params["out"] = out;
    }
    if (topdir !== null) {
        params["topdir"] = topdir;
    }
    if (xform !== null) {
        params["xform"] = xform;
    }
    if (sdir !== null) {
        params["sdir"] = sdir;
    }
    if (ctab !== null) {
        params["ctab"] = ctab;
    }
    return params;
}


function make_average_volume_cargs(
    params: MakeAverageVolumeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("make_average_volume");
    cargs.push(
        "--subjects",
        ...(params["subjects"] ?? null)
    );
    if ((params["fsgd"] ?? null) !== null) {
        cargs.push(
            "--fsgd",
            execution.inputFile((params["fsgd"] ?? null))
        );
    }
    if ((params["out"] ?? null) !== null) {
        cargs.push(
            "--out",
            (params["out"] ?? null)
        );
    }
    if ((params["topdir"] ?? null) !== null) {
        cargs.push(
            "--topdir",
            (params["topdir"] ?? null)
        );
    }
    if ((params["xform"] ?? null) !== null) {
        cargs.push(
            "--xform",
            (params["xform"] ?? null)
        );
    }
    if ((params["sdir"] ?? null) !== null) {
        cargs.push(
            "--sdir",
            (params["sdir"] ?? null)
        );
    }
    if ((params["sd_flag"] ?? null)) {
        cargs.push("--sd");
    }
    if ((params["force_flag"] ?? null)) {
        cargs.push("--force");
    }
    if ((params["keep_all_orig_flag"] ?? null)) {
        cargs.push("--keep-all-orig");
    }
    if ((params["no_aseg_flag"] ?? null)) {
        cargs.push("--no-aseg");
    }
    if ((params["ctab"] ?? null) !== null) {
        cargs.push(
            "--ctab",
            (params["ctab"] ?? null)
        );
    }
    if ((params["ctab_default_flag"] ?? null)) {
        cargs.push("--ctab-default");
    }
    if ((params["echo_flag"] ?? null)) {
        cargs.push("--echo");
    }
    if ((params["debug_flag"] ?? null)) {
        cargs.push("--debug");
    }
    if ((params["nocleanup_flag"] ?? null)) {
        cargs.push("--nocleanup");
    }
    return cargs;
}


function make_average_volume_outputs(
    params: MakeAverageVolumeParameters,
    execution: Execution,
): MakeAverageVolumeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MakeAverageVolumeOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function make_average_volume_execute(
    params: MakeAverageVolumeParameters,
    execution: Execution,
): MakeAverageVolumeOutputs {
    /**
     * Creates average volumes from a set of subjects.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MakeAverageVolumeOutputs`).
     */
    params = execution.params(params)
    const cargs = make_average_volume_cargs(params, execution)
    const ret = make_average_volume_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function make_average_volume(
    subjects: Array<string>,
    fsgd: InputPathType | null = null,
    out: string | null = null,
    topdir: string | null = null,
    xform: string | null = null,
    sdir: string | null = null,
    sd_flag: boolean = false,
    force_flag: boolean = false,
    keep_all_orig_flag: boolean = false,
    no_aseg_flag: boolean = false,
    ctab: string | null = null,
    ctab_default_flag: boolean = false,
    echo_flag: boolean = false,
    debug_flag: boolean = false,
    nocleanup_flag: boolean = false,
    runner: Runner | null = null,
): MakeAverageVolumeOutputs {
    /**
     * Creates average volumes from a set of subjects.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subjects List of subjects to include in the average.
     * @param fsgd File containing subject list for averaging.
     * @param out Output average subject name. Default is 'average'.
     * @param topdir Directory to put data and link to SUBJECTS_DIR.
     * @param xform Transformation name to use, default is talairach.xfm.
     * @param sdir Use specified SUBJECTS_DIR instead of the environment's one.
     * @param sd_flag Same as --sdir.
     * @param force_flag Overwrite existing average subject data.
     * @param keep_all_orig_flag Concatenate all original volumes into mri/orig.all.mgz.
     * @param no_aseg_flag Do not create 'average' aseg.
     * @param ctab Embed colortable into segmentations.
     * @param ctab_default_flag Embed FreeSurferColorLUT.txt into segmentations.
     * @param echo_flag Enable command echo for debugging.
     * @param debug_flag Same as --echo for debugging.
     * @param nocleanup_flag Do not delete temporary files.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MakeAverageVolumeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MAKE_AVERAGE_VOLUME_METADATA);
    const params = make_average_volume_params(subjects, fsgd, out, topdir, xform, sdir, sd_flag, force_flag, keep_all_orig_flag, no_aseg_flag, ctab, ctab_default_flag, echo_flag, debug_flag, nocleanup_flag)
    return make_average_volume_execute(params, execution);
}


export {
      MAKE_AVERAGE_VOLUME_METADATA,
      MakeAverageVolumeOutputs,
      MakeAverageVolumeParameters,
      make_average_volume,
      make_average_volume_params,
};
