// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__SUMA_MAKE_SPEC_FS_METADATA: Metadata = {
    id: "10445ccc3d3a66bb5ebcc9fc5b2ee7040da06041.boutiques",
    name: "@SUMA_Make_Spec_FS",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VSumaMakeSpecFsParameters {
    "__STYXTYPE__": "@SUMA_Make_Spec_FS";
    "subject_id": string;
    "debug"?: number | null | undefined;
    "fs_setup": boolean;
    "filesystem_path"?: string | null | undefined;
    "extra_annot_labels"?: Array<string> | null | undefined;
    "extra_fs_dsets"?: Array<string> | null | undefined;
    "make_rank_dsets": boolean;
    "use_mgz": boolean;
    "neuro": boolean;
    "gnifti": boolean;
    "nifti": boolean;
    "inflate"?: number | null | undefined;
    "set_space"?: string | null | undefined;
    "ld"?: number | null | undefined;
    "ldpref"?: string | null | undefined;
    "no_ld": boolean;
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
        "@SUMA_Make_Spec_FS": v__suma_make_spec_fs_cargs,
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
        "@SUMA_Make_Spec_FS": v__suma_make_spec_fs_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__suma_make_spec_fs(...)`.
 *
 * @interface
 */
interface VSumaMakeSpecFsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * All created files are stored in a new SUMA directory
     */
    suma_output: OutputPathType;
}


function v__suma_make_spec_fs_params(
    subject_id: string,
    debug: number | null = null,
    fs_setup: boolean = false,
    filesystem_path: string | null = null,
    extra_annot_labels: Array<string> | null = null,
    extra_fs_dsets: Array<string> | null = null,
    make_rank_dsets: boolean = false,
    use_mgz: boolean = false,
    neuro: boolean = false,
    gnifti: boolean = false,
    nifti: boolean = false,
    inflate: number | null = null,
    set_space: string | null = null,
    ld: number | null = null,
    ldpref: string | null = null,
    no_ld: boolean = false,
): VSumaMakeSpecFsParameters {
    /**
     * Build parameters.
    
     * @param subject_id Required subject ID for file naming
     * @param debug Print debug information along the way; default level is 0, max is 2
     * @param fs_setup Source $FREESURFER_HOME/SetUpFreeSurfer.csh
     * @param filesystem_path Path to 'surf' and 'orig' directories; defaults to './', the current directory
     * @param extra_annot_labels Convert extra annot files into ROI datasets
     * @param extra_fs_dsets List other datasets to include; defaults are thickness, curv, sulc
     * @param make_rank_dsets Create *rank* datasets; for backward compatibility
     * @param use_mgz Use MGZ volumes even if COR volumes are there
     * @param neuro Use neurological orientation
     * @param gnifti Produce files in exchangeable formats; same as -NIFTI
     * @param nifti Produce files in exchangeable formats; output files in NIFTI format and surfaces in GIFTI format
     * @param inflate Create moderately inflated surfaces using SurfSmooth; control the amount of smoothness with INF
     * @param set_space Set the space flag of all volumes; defaults to 'orig' space
     * @param ld Create standard mesh surfaces with mesh density linear depth set to LD
     * @param ldpref Supply the prefix option for MapIcosahedron; defaults to std.LD
     * @param no_ld Do not run MapIcosahedron
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@SUMA_Make_Spec_FS" as const,
        "subject_id": subject_id,
        "fs_setup": fs_setup,
        "make_rank_dsets": make_rank_dsets,
        "use_mgz": use_mgz,
        "neuro": neuro,
        "gnifti": gnifti,
        "nifti": nifti,
        "no_ld": no_ld,
    };
    if (debug !== null) {
        params["debug"] = debug;
    }
    if (filesystem_path !== null) {
        params["filesystem_path"] = filesystem_path;
    }
    if (extra_annot_labels !== null) {
        params["extra_annot_labels"] = extra_annot_labels;
    }
    if (extra_fs_dsets !== null) {
        params["extra_fs_dsets"] = extra_fs_dsets;
    }
    if (inflate !== null) {
        params["inflate"] = inflate;
    }
    if (set_space !== null) {
        params["set_space"] = set_space;
    }
    if (ld !== null) {
        params["ld"] = ld;
    }
    if (ldpref !== null) {
        params["ldpref"] = ldpref;
    }
    return params;
}


function v__suma_make_spec_fs_cargs(
    params: VSumaMakeSpecFsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@SUMA_Make_Spec_FS");
    cargs.push(
        "-sid",
        (params["subject_id"] ?? null)
    );
    if ((params["debug"] ?? null) !== null) {
        cargs.push(
            "-debug",
            String((params["debug"] ?? null))
        );
    }
    if ((params["fs_setup"] ?? null)) {
        cargs.push("-fs_setup");
    }
    if ((params["filesystem_path"] ?? null) !== null) {
        cargs.push(
            "-fspath",
            (params["filesystem_path"] ?? null)
        );
    }
    if ((params["extra_annot_labels"] ?? null) !== null) {
        cargs.push(
            "-extra_annot_labels",
            ...(params["extra_annot_labels"] ?? null)
        );
    }
    if ((params["extra_fs_dsets"] ?? null) !== null) {
        cargs.push(
            "-extra_fs_dsets",
            ...(params["extra_fs_dsets"] ?? null)
        );
    }
    if ((params["make_rank_dsets"] ?? null)) {
        cargs.push("-make_rank_dsets");
    }
    if ((params["use_mgz"] ?? null)) {
        cargs.push("-use_mgz");
    }
    if ((params["neuro"] ?? null)) {
        cargs.push("-neuro");
    }
    if ((params["gnifti"] ?? null)) {
        cargs.push("-GNIFTI");
    }
    if ((params["nifti"] ?? null)) {
        cargs.push("-NIFTI");
    }
    if ((params["inflate"] ?? null) !== null) {
        cargs.push(
            "-inflate",
            String((params["inflate"] ?? null))
        );
    }
    if ((params["set_space"] ?? null) !== null) {
        cargs.push(
            "-set_space",
            (params["set_space"] ?? null)
        );
    }
    if ((params["ld"] ?? null) !== null) {
        cargs.push(
            "-ld",
            String((params["ld"] ?? null))
        );
    }
    if ((params["ldpref"] ?? null) !== null) {
        cargs.push(
            "-ldpref",
            (params["ldpref"] ?? null)
        );
    }
    if ((params["no_ld"] ?? null)) {
        cargs.push("-no_ld");
    }
    return cargs;
}


function v__suma_make_spec_fs_outputs(
    params: VSumaMakeSpecFsParameters,
    execution: Execution,
): VSumaMakeSpecFsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VSumaMakeSpecFsOutputs = {
        root: execution.outputFile("."),
        suma_output: execution.outputFile(["SUMA/*"].join('')),
    };
    return ret;
}


function v__suma_make_spec_fs_execute(
    params: VSumaMakeSpecFsParameters,
    execution: Execution,
): VSumaMakeSpecFsOutputs {
    /**
     * Prepare for surface viewing in SUMA.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VSumaMakeSpecFsOutputs`).
     */
    params = execution.params(params)
    const cargs = v__suma_make_spec_fs_cargs(params, execution)
    const ret = v__suma_make_spec_fs_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__suma_make_spec_fs(
    subject_id: string,
    debug: number | null = null,
    fs_setup: boolean = false,
    filesystem_path: string | null = null,
    extra_annot_labels: Array<string> | null = null,
    extra_fs_dsets: Array<string> | null = null,
    make_rank_dsets: boolean = false,
    use_mgz: boolean = false,
    neuro: boolean = false,
    gnifti: boolean = false,
    nifti: boolean = false,
    inflate: number | null = null,
    set_space: string | null = null,
    ld: number | null = null,
    ldpref: string | null = null,
    no_ld: boolean = false,
    runner: Runner | null = null,
): VSumaMakeSpecFsOutputs {
    /**
     * Prepare for surface viewing in SUMA.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param subject_id Required subject ID for file naming
     * @param debug Print debug information along the way; default level is 0, max is 2
     * @param fs_setup Source $FREESURFER_HOME/SetUpFreeSurfer.csh
     * @param filesystem_path Path to 'surf' and 'orig' directories; defaults to './', the current directory
     * @param extra_annot_labels Convert extra annot files into ROI datasets
     * @param extra_fs_dsets List other datasets to include; defaults are thickness, curv, sulc
     * @param make_rank_dsets Create *rank* datasets; for backward compatibility
     * @param use_mgz Use MGZ volumes even if COR volumes are there
     * @param neuro Use neurological orientation
     * @param gnifti Produce files in exchangeable formats; same as -NIFTI
     * @param nifti Produce files in exchangeable formats; output files in NIFTI format and surfaces in GIFTI format
     * @param inflate Create moderately inflated surfaces using SurfSmooth; control the amount of smoothness with INF
     * @param set_space Set the space flag of all volumes; defaults to 'orig' space
     * @param ld Create standard mesh surfaces with mesh density linear depth set to LD
     * @param ldpref Supply the prefix option for MapIcosahedron; defaults to std.LD
     * @param no_ld Do not run MapIcosahedron
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VSumaMakeSpecFsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__SUMA_MAKE_SPEC_FS_METADATA);
    const params = v__suma_make_spec_fs_params(subject_id, debug, fs_setup, filesystem_path, extra_annot_labels, extra_fs_dsets, make_rank_dsets, use_mgz, neuro, gnifti, nifti, inflate, set_space, ld, ldpref, no_ld)
    return v__suma_make_spec_fs_execute(params, execution);
}


export {
      VSumaMakeSpecFsOutputs,
      VSumaMakeSpecFsParameters,
      V__SUMA_MAKE_SPEC_FS_METADATA,
      v__suma_make_spec_fs,
      v__suma_make_spec_fs_params,
};
