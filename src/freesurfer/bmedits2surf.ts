// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const BMEDITS2SURF_METADATA: Metadata = {
    id: "be18624e39ce9efc3a4eb4744be1016b11c9fa5f.boutiques",
    name: "bmedits2surf",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface Bmedits2surfParameters {
    "__STYXTYPE__": "bmedits2surf";
    "subject": string;
    "self": boolean;
    "overwrite": boolean;
    "tmp_dir"?: string | null | undefined;
    "cleanup": boolean;
    "no_cleanup": boolean;
    "debug": boolean;
    "left_hemisphere": boolean;
    "right_hemisphere": boolean;
    "no_surfs": boolean;
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
        "bmedits2surf": bmedits2surf_cargs,
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
        "bmedits2surf": bmedits2surf_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `bmedits2surf(...)`.
 *
 * @interface
 */
interface Bmedits2surfOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Binary mask of erased surface locations for the left hemisphere in fsaverage space.
     */
    lh_bmerase: OutputPathType;
    /**
     * Binary mask of erased surface locations for the right hemisphere in fsaverage space.
     */
    rh_bmerase: OutputPathType;
    /**
     * Binary mask of cloned surface locations for the left hemisphere in fsaverage space.
     */
    lh_bmclone: OutputPathType;
    /**
     * Binary mask of cloned surface locations for the right hemisphere in fsaverage space.
     */
    rh_bmclone: OutputPathType;
    /**
     * Statistics about the number of voxels cloned.
     */
    bmclone_stats: OutputPathType;
    /**
     * Statistics about the number of voxels erased.
     */
    bmerase_stats: OutputPathType;
}


function bmedits2surf_params(
    subject: string,
    self: boolean = false,
    overwrite: boolean = false,
    tmp_dir: string | null = null,
    cleanup: boolean = false,
    no_cleanup: boolean = false,
    debug: boolean = false,
    left_hemisphere: boolean = false,
    right_hemisphere: boolean = false,
    no_surfs: boolean = false,
): Bmedits2surfParameters {
    /**
     * Build parameters.
    
     * @param subject The subject for which the binary map will be computed.
     * @param overwrite Force overwriting of existing results.
     * @param tmp_dir Temporary directory.
     * @param cleanup Clean up temporary files.
     * @param no_cleanup Do not clean up temporary files.
     * @param debug Enable debug mode.
     * @param left_hemisphere Perform operation only on the left hemisphere.
     * @param right_hemisphere Perform operation only on the right hemisphere.
     * @param no_surfs Do not compute surfaces, only statistics.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "bmedits2surf" as const,
        "subject": subject,
        "self": self,
        "overwrite": overwrite,
        "cleanup": cleanup,
        "no_cleanup": no_cleanup,
        "debug": debug,
        "left_hemisphere": left_hemisphere,
        "right_hemisphere": right_hemisphere,
        "no_surfs": no_surfs,
    };
    if (tmp_dir !== null) {
        params["tmp_dir"] = tmp_dir;
    }
    return params;
}


function bmedits2surf_cargs(
    params: Bmedits2surfParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("bmedits2surf");
    cargs.push(
        "-s",
        ["-", (params["subject"] ?? null)].join('')
    );
    if ((params["self"] ?? null)) {
        cargs.push("--self");
    }
    if ((params["overwrite"] ?? null)) {
        cargs.push("--overwrite");
    }
    if ((params["tmp_dir"] ?? null) !== null) {
        cargs.push(
            "--tmp",
            (params["tmp_dir"] ?? null)
        );
    }
    if ((params["cleanup"] ?? null)) {
        cargs.push("--cleanup");
    }
    if ((params["no_cleanup"] ?? null)) {
        cargs.push("--no-cleanup");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("--debug");
    }
    if ((params["left_hemisphere"] ?? null)) {
        cargs.push("--lh");
    }
    if ((params["right_hemisphere"] ?? null)) {
        cargs.push("--rh");
    }
    if ((params["no_surfs"] ?? null)) {
        cargs.push("--no-surfs");
    }
    return cargs;
}


function bmedits2surf_outputs(
    params: Bmedits2surfParameters,
    execution: Execution,
): Bmedits2surfOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Bmedits2surfOutputs = {
        root: execution.outputFile("."),
        lh_bmerase: execution.outputFile([(params["subject"] ?? null), "/surf/lh.bmerase.fsa.mgh"].join('')),
        rh_bmerase: execution.outputFile([(params["subject"] ?? null), "/surf/rh.bmerase.fsa.mgh"].join('')),
        lh_bmclone: execution.outputFile([(params["subject"] ?? null), "/surf/lh.bmclone.fsa.mgh"].join('')),
        rh_bmclone: execution.outputFile([(params["subject"] ?? null), "/surf/rh.bmclone.fsa.mgh"].join('')),
        bmclone_stats: execution.outputFile([(params["subject"] ?? null), "/stats/bmclone.dat"].join('')),
        bmerase_stats: execution.outputFile([(params["subject"] ?? null), "/stats/bmerase.dat"].join('')),
    };
    return ret;
}


function bmedits2surf_execute(
    params: Bmedits2surfParameters,
    execution: Execution,
): Bmedits2surfOutputs {
    /**
     * Computes a binary map of surface locations where the brainmask.mgz has been edited.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Bmedits2surfOutputs`).
     */
    params = execution.params(params)
    const cargs = bmedits2surf_cargs(params, execution)
    const ret = bmedits2surf_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function bmedits2surf(
    subject: string,
    self: boolean = false,
    overwrite: boolean = false,
    tmp_dir: string | null = null,
    cleanup: boolean = false,
    no_cleanup: boolean = false,
    debug: boolean = false,
    left_hemisphere: boolean = false,
    right_hemisphere: boolean = false,
    no_surfs: boolean = false,
    runner: Runner | null = null,
): Bmedits2surfOutputs {
    /**
     * Computes a binary map of surface locations where the brainmask.mgz has been edited.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject The subject for which the binary map will be computed.
     * @param overwrite Force overwriting of existing results.
     * @param tmp_dir Temporary directory.
     * @param cleanup Clean up temporary files.
     * @param no_cleanup Do not clean up temporary files.
     * @param debug Enable debug mode.
     * @param left_hemisphere Perform operation only on the left hemisphere.
     * @param right_hemisphere Perform operation only on the right hemisphere.
     * @param no_surfs Do not compute surfaces, only statistics.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Bmedits2surfOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(BMEDITS2SURF_METADATA);
    const params = bmedits2surf_params(subject, self, overwrite, tmp_dir, cleanup, no_cleanup, debug, left_hemisphere, right_hemisphere, no_surfs)
    return bmedits2surf_execute(params, execution);
}


export {
      BMEDITS2SURF_METADATA,
      Bmedits2surfOutputs,
      Bmedits2surfParameters,
      bmedits2surf,
      bmedits2surf_params,
};
