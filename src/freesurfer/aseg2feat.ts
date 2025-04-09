// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ASEG2FEAT_METADATA: Metadata = {
    id: "b7b7dd7d021ba889f028fd69296eae3f1560ec42.boutiques",
    name: "aseg2feat",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface Aseg2featParameters {
    "__STYXTYPE__": "aseg2feat";
    "feat": string;
    "featdirfile"?: InputPathType | null | undefined;
    "seg"?: string | null | undefined;
    "aparc_aseg": boolean;
    "svstats": boolean;
    "standard": boolean;
    "debug": boolean;
    "help": boolean;
    "version": boolean;
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
        "aseg2feat": aseg2feat_cargs,
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
        "aseg2feat": aseg2feat_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `aseg2feat(...)`.
 *
 * @interface
 */
interface Aseg2featOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Result segmentation in FEAT functional space.
     */
    segmentation_output: OutputPathType;
    /**
     * Directory where results are saved when using --svstats.
     */
    stats_output: OutputPathType;
}


function aseg2feat_params(
    feat: string,
    featdirfile: InputPathType | null = null,
    seg: string | null = null,
    aparc_aseg: boolean = false,
    svstats: boolean = false,
    standard: boolean = false,
    debug: boolean = false,
    help: boolean = false,
    version: boolean = false,
): Aseg2featParameters {
    /**
     * Build parameters.
    
     * @param feat FEAT output directory. Multiple --feat arguments can be supplied.
     * @param featdirfile File with a list of FEAT directories. Can be used in conjunction with --feat.
     * @param seg Change segmentation volume, default is aseg.
     * @param aparc_aseg Use aparc+aseg.mgz. Same as --seg aparc+aseg.mgz.
     * @param svstats Save result in featdir/stats instead of featdir/reg/freesurfer
     * @param standard Map results to standard space instead of native functional space. Implies --svstats.
     * @param debug Turn on debugging.
     * @param help Print help and exit.
     * @param version Print version and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "aseg2feat" as const,
        "feat": feat,
        "aparc_aseg": aparc_aseg,
        "svstats": svstats,
        "standard": standard,
        "debug": debug,
        "help": help,
        "version": version,
    };
    if (featdirfile !== null) {
        params["featdirfile"] = featdirfile;
    }
    if (seg !== null) {
        params["seg"] = seg;
    }
    return params;
}


function aseg2feat_cargs(
    params: Aseg2featParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("aseg2feat");
    cargs.push(
        "--feat",
        (params["feat"] ?? null)
    );
    if ((params["featdirfile"] ?? null) !== null) {
        cargs.push(
            "--featdirfile",
            execution.inputFile((params["featdirfile"] ?? null))
        );
    }
    if ((params["seg"] ?? null) !== null) {
        cargs.push(
            "--seg",
            (params["seg"] ?? null)
        );
    }
    if ((params["aparc_aseg"] ?? null)) {
        cargs.push("--aparc+aseg");
    }
    if ((params["svstats"] ?? null)) {
        cargs.push("--svstats");
    }
    if ((params["standard"] ?? null)) {
        cargs.push("--standard");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("--debug");
    }
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("--version");
    }
    return cargs;
}


function aseg2feat_outputs(
    params: Aseg2featParameters,
    execution: Execution,
): Aseg2featOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Aseg2featOutputs = {
        root: execution.outputFile("."),
        segmentation_output: execution.outputFile([(params["feat"] ?? null), "/reg/freesurfer/aseg.nii.gz"].join('')),
        stats_output: execution.outputFile([(params["feat"] ?? null), "/stats"].join('')),
    };
    return ret;
}


function aseg2feat_execute(
    params: Aseg2featParameters,
    execution: Execution,
): Aseg2featOutputs {
    /**
     * Resamples the FreeSurfer automatic subcortical segmentation (aseg) to the FEAT functional space.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Aseg2featOutputs`).
     */
    params = execution.params(params)
    const cargs = aseg2feat_cargs(params, execution)
    const ret = aseg2feat_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function aseg2feat(
    feat: string,
    featdirfile: InputPathType | null = null,
    seg: string | null = null,
    aparc_aseg: boolean = false,
    svstats: boolean = false,
    standard: boolean = false,
    debug: boolean = false,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): Aseg2featOutputs {
    /**
     * Resamples the FreeSurfer automatic subcortical segmentation (aseg) to the FEAT functional space.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param feat FEAT output directory. Multiple --feat arguments can be supplied.
     * @param featdirfile File with a list of FEAT directories. Can be used in conjunction with --feat.
     * @param seg Change segmentation volume, default is aseg.
     * @param aparc_aseg Use aparc+aseg.mgz. Same as --seg aparc+aseg.mgz.
     * @param svstats Save result in featdir/stats instead of featdir/reg/freesurfer
     * @param standard Map results to standard space instead of native functional space. Implies --svstats.
     * @param debug Turn on debugging.
     * @param help Print help and exit.
     * @param version Print version and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Aseg2featOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ASEG2FEAT_METADATA);
    const params = aseg2feat_params(feat, featdirfile, seg, aparc_aseg, svstats, standard, debug, help, version)
    return aseg2feat_execute(params, execution);
}


export {
      ASEG2FEAT_METADATA,
      Aseg2featOutputs,
      Aseg2featParameters,
      aseg2feat,
      aseg2feat_params,
};
