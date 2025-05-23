// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_DIFF_METADATA: Metadata = {
    id: "b75e9135951f27be6bd2952dbbcb87b5a6184000.boutiques",
    name: "mris_diff",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisDiffParameters {
    "__STYXTYPE__": "mris_diff";
    "surface1": InputPathType;
    "surface2": InputPathType;
    "subject1": string;
    "subject2": string;
    "subj_dir1"?: string | null | undefined;
    "subj_dir2"?: string | null | undefined;
    "hemisphere": string;
    "surf"?: string | null | undefined;
    "curv"?: string | null | undefined;
    "aparc"?: string | null | undefined;
    "aparc2"?: string | null | undefined;
    "simple": boolean;
    "simple_patch": boolean;
    "thresh"?: number | null | undefined;
    "maxerrs"?: number | null | undefined;
    "renumbered": boolean;
    "worst_bucket"?: string | null | undefined;
    "grid"?: string | null | undefined;
    "no_check_xyz": boolean;
    "no_check_nxyz": boolean;
    "xyz_rms"?: string | null | undefined;
    "angle_rms"?: string | null | undefined;
    "seed"?: number | null | undefined;
    "min_dist"?: string | null | undefined;
    "debug": boolean;
    "gdiag_no"?: number | null | undefined;
    "check_opts": boolean;
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
        "mris_diff": mris_diff_cargs,
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
 * Output object returned when calling `mris_diff(...)`.
 *
 * @interface
 */
interface MrisDiffOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mris_diff_params(
    surface1: InputPathType,
    surface2: InputPathType,
    subject1: string,
    subject2: string,
    hemisphere: string,
    subj_dir1: string | null = null,
    subj_dir2: string | null = null,
    surf: string | null = null,
    curv: string | null = null,
    aparc: string | null = null,
    aparc2: string | null = null,
    simple: boolean = false,
    simple_patch: boolean = false,
    thresh: number | null = null,
    maxerrs: number | null = null,
    renumbered: boolean = false,
    worst_bucket: string | null = null,
    grid: string | null = null,
    no_check_xyz: boolean = false,
    no_check_nxyz: boolean = false,
    xyz_rms: string | null = null,
    angle_rms: string | null = null,
    seed: number | null = null,
    min_dist: string | null = null,
    debug: boolean = false,
    gdiag_no: number | null = null,
    check_opts: boolean = false,
    help: boolean = false,
    version: boolean = false,
): MrisDiffParameters {
    /**
     * Build parameters.
    
     * @param surface1 First surface file
     * @param surface2 Second surface file
     * @param subject1 Subject 1 name
     * @param subject2 Subject 2 name
     * @param hemisphere Hemisphere (rh or lh)
     * @param subj_dir1 Directory for Subject 1 (default is SUBJECTS_DIR)
     * @param subj_dir2 Directory for Subject 2 (default is SUBJECTS_DIR)
     * @param surf Compare surface
     * @param curv Compare curvature
     * @param aparc Compare aparc annotation
     * @param aparc2 Optional different name to compare to aparc
     * @param simple Simple comparison of two surfaces to just report differences
     * @param simple_patch Simple comparison of two patches
     * @param thresh Threshold (default=0) [Note: Not currently implemented!]
     * @param maxerrs Stop looping after N errors (default=10)
     * @param renumbered Vertices or faces may have been renumbered and a few deleted
     * @param worst_bucket Compute the worst histogram bucket each vertex is in
     * @param grid Label the vertices of edges that span a grid based on the provided spacing float
     * @param no_check_xyz Do not check vertex xyz
     * @param no_check_nxyz Do not check vertex normals
     * @param xyz_rms Compute and save RMS diff between xyz
     * @param angle_rms Compute angle on sphere between xyz
     * @param seed Set random seed for degenerate normals
     * @param min_dist Compute vertex-by-vertex RMS distance between surfaces
     * @param debug Enable debugging output
     * @param gdiag_no Specify Gdiag_no
     * @param check_opts Only check options and exit
     * @param help Display help information
     * @param version Display version information
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_diff" as const,
        "surface1": surface1,
        "surface2": surface2,
        "subject1": subject1,
        "subject2": subject2,
        "hemisphere": hemisphere,
        "simple": simple,
        "simple_patch": simple_patch,
        "renumbered": renumbered,
        "no_check_xyz": no_check_xyz,
        "no_check_nxyz": no_check_nxyz,
        "debug": debug,
        "check_opts": check_opts,
        "help": help,
        "version": version,
    };
    if (subj_dir1 !== null) {
        params["subj_dir1"] = subj_dir1;
    }
    if (subj_dir2 !== null) {
        params["subj_dir2"] = subj_dir2;
    }
    if (surf !== null) {
        params["surf"] = surf;
    }
    if (curv !== null) {
        params["curv"] = curv;
    }
    if (aparc !== null) {
        params["aparc"] = aparc;
    }
    if (aparc2 !== null) {
        params["aparc2"] = aparc2;
    }
    if (thresh !== null) {
        params["thresh"] = thresh;
    }
    if (maxerrs !== null) {
        params["maxerrs"] = maxerrs;
    }
    if (worst_bucket !== null) {
        params["worst_bucket"] = worst_bucket;
    }
    if (grid !== null) {
        params["grid"] = grid;
    }
    if (xyz_rms !== null) {
        params["xyz_rms"] = xyz_rms;
    }
    if (angle_rms !== null) {
        params["angle_rms"] = angle_rms;
    }
    if (seed !== null) {
        params["seed"] = seed;
    }
    if (min_dist !== null) {
        params["min_dist"] = min_dist;
    }
    if (gdiag_no !== null) {
        params["gdiag_no"] = gdiag_no;
    }
    return params;
}


function mris_diff_cargs(
    params: MrisDiffParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_diff");
    cargs.push(execution.inputFile((params["surface1"] ?? null)));
    cargs.push(execution.inputFile((params["surface2"] ?? null)));
    cargs.push(
        "--s1",
        (params["subject1"] ?? null)
    );
    cargs.push(
        "--s2",
        (params["subject2"] ?? null)
    );
    if ((params["subj_dir1"] ?? null) !== null) {
        cargs.push(
            "--sd1",
            (params["subj_dir1"] ?? null)
        );
    }
    if ((params["subj_dir2"] ?? null) !== null) {
        cargs.push(
            "--sd2",
            (params["subj_dir2"] ?? null)
        );
    }
    cargs.push(
        "--hemi",
        (params["hemisphere"] ?? null)
    );
    if ((params["surf"] ?? null) !== null) {
        cargs.push(
            "--surf",
            (params["surf"] ?? null)
        );
    }
    if ((params["curv"] ?? null) !== null) {
        cargs.push(
            "--curv",
            (params["curv"] ?? null)
        );
    }
    if ((params["aparc"] ?? null) !== null) {
        cargs.push(
            "--aparc",
            (params["aparc"] ?? null)
        );
    }
    if ((params["aparc2"] ?? null) !== null) {
        cargs.push(
            "--aparc2",
            (params["aparc2"] ?? null)
        );
    }
    if ((params["simple"] ?? null)) {
        cargs.push("--simple");
    }
    if ((params["simple_patch"] ?? null)) {
        cargs.push("--simple-patch");
    }
    if ((params["thresh"] ?? null) !== null) {
        cargs.push(
            "--thresh",
            String((params["thresh"] ?? null))
        );
    }
    if ((params["maxerrs"] ?? null) !== null) {
        cargs.push(
            "--maxerrs",
            String((params["maxerrs"] ?? null))
        );
    }
    if ((params["renumbered"] ?? null)) {
        cargs.push("--renumbered");
    }
    if ((params["worst_bucket"] ?? null) !== null) {
        cargs.push(
            "--worst-bucket",
            (params["worst_bucket"] ?? null)
        );
    }
    if ((params["grid"] ?? null) !== null) {
        cargs.push(
            "--grid",
            (params["grid"] ?? null)
        );
    }
    if ((params["no_check_xyz"] ?? null)) {
        cargs.push("--no-check-xyz");
    }
    if ((params["no_check_nxyz"] ?? null)) {
        cargs.push("--no-check-nxyz");
    }
    if ((params["xyz_rms"] ?? null) !== null) {
        cargs.push(
            "--xyz-rms",
            (params["xyz_rms"] ?? null)
        );
    }
    if ((params["angle_rms"] ?? null) !== null) {
        cargs.push(
            "--angle-rms",
            (params["angle_rms"] ?? null)
        );
    }
    if ((params["seed"] ?? null) !== null) {
        cargs.push(
            "--seed",
            String((params["seed"] ?? null))
        );
    }
    if ((params["min_dist"] ?? null) !== null) {
        cargs.push(
            "--min-dist",
            (params["min_dist"] ?? null)
        );
    }
    if ((params["debug"] ?? null)) {
        cargs.push("--debug");
    }
    if ((params["gdiag_no"] ?? null) !== null) {
        cargs.push(
            "--gdiag_no",
            String((params["gdiag_no"] ?? null))
        );
    }
    if ((params["check_opts"] ?? null)) {
        cargs.push("--checkopts");
    }
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("--version");
    }
    return cargs;
}


function mris_diff_outputs(
    params: MrisDiffParameters,
    execution: Execution,
): MrisDiffOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisDiffOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mris_diff_execute(
    params: MrisDiffParameters,
    execution: Execution,
): MrisDiffOutputs {
    /**
     * A tool for comparing differences between surface files in FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisDiffOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_diff_cargs(params, execution)
    const ret = mris_diff_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_diff(
    surface1: InputPathType,
    surface2: InputPathType,
    subject1: string,
    subject2: string,
    hemisphere: string,
    subj_dir1: string | null = null,
    subj_dir2: string | null = null,
    surf: string | null = null,
    curv: string | null = null,
    aparc: string | null = null,
    aparc2: string | null = null,
    simple: boolean = false,
    simple_patch: boolean = false,
    thresh: number | null = null,
    maxerrs: number | null = null,
    renumbered: boolean = false,
    worst_bucket: string | null = null,
    grid: string | null = null,
    no_check_xyz: boolean = false,
    no_check_nxyz: boolean = false,
    xyz_rms: string | null = null,
    angle_rms: string | null = null,
    seed: number | null = null,
    min_dist: string | null = null,
    debug: boolean = false,
    gdiag_no: number | null = null,
    check_opts: boolean = false,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): MrisDiffOutputs {
    /**
     * A tool for comparing differences between surface files in FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param surface1 First surface file
     * @param surface2 Second surface file
     * @param subject1 Subject 1 name
     * @param subject2 Subject 2 name
     * @param hemisphere Hemisphere (rh or lh)
     * @param subj_dir1 Directory for Subject 1 (default is SUBJECTS_DIR)
     * @param subj_dir2 Directory for Subject 2 (default is SUBJECTS_DIR)
     * @param surf Compare surface
     * @param curv Compare curvature
     * @param aparc Compare aparc annotation
     * @param aparc2 Optional different name to compare to aparc
     * @param simple Simple comparison of two surfaces to just report differences
     * @param simple_patch Simple comparison of two patches
     * @param thresh Threshold (default=0) [Note: Not currently implemented!]
     * @param maxerrs Stop looping after N errors (default=10)
     * @param renumbered Vertices or faces may have been renumbered and a few deleted
     * @param worst_bucket Compute the worst histogram bucket each vertex is in
     * @param grid Label the vertices of edges that span a grid based on the provided spacing float
     * @param no_check_xyz Do not check vertex xyz
     * @param no_check_nxyz Do not check vertex normals
     * @param xyz_rms Compute and save RMS diff between xyz
     * @param angle_rms Compute angle on sphere between xyz
     * @param seed Set random seed for degenerate normals
     * @param min_dist Compute vertex-by-vertex RMS distance between surfaces
     * @param debug Enable debugging output
     * @param gdiag_no Specify Gdiag_no
     * @param check_opts Only check options and exit
     * @param help Display help information
     * @param version Display version information
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisDiffOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_DIFF_METADATA);
    const params = mris_diff_params(surface1, surface2, subject1, subject2, hemisphere, subj_dir1, subj_dir2, surf, curv, aparc, aparc2, simple, simple_patch, thresh, maxerrs, renumbered, worst_bucket, grid, no_check_xyz, no_check_nxyz, xyz_rms, angle_rms, seed, min_dist, debug, gdiag_no, check_opts, help, version)
    return mris_diff_execute(params, execution);
}


export {
      MRIS_DIFF_METADATA,
      MrisDiffOutputs,
      MrisDiffParameters,
      mris_diff,
      mris_diff_params,
};
