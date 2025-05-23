// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_PREPROC_METADATA: Metadata = {
    id: "16cdfb7b51dd763ef5a6ca84535e486dc12ef102.boutiques",
    name: "mris_preproc",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisPreprocParameters {
    "__STYXTYPE__": "mris_preproc";
    "outfile": string;
    "target_subject": string;
    "hemi": string;
    "meas"?: string | null | undefined;
    "label"?: string | null | undefined;
    "measdir"?: string | null | undefined;
    "subjects"?: Array<string> | null | undefined;
    "fsgd"?: InputPathType | null | undefined;
    "subjectlist"?: InputPathType | null | undefined;
    "qdec"?: InputPathType | null | undefined;
    "qdec_long"?: InputPathType | null | undefined;
    "surfmeasfile"?: Array<InputPathType> | null | undefined;
    "volmeasfile_reg"?: Array<string> | null | undefined;
    "projfrac"?: number | null | undefined;
    "projfrac_max"?: Array<number> | null | undefined;
    "projfrac_avg"?: Array<number> | null | undefined;
    "no_mask_non_cortex": boolean;
    "session_file"?: InputPathType | null | undefined;
    "dir_file"?: InputPathType | null | undefined;
    "analysis"?: string | null | undefined;
    "contrast"?: string | null | undefined;
    "cvar_flag": boolean;
    "offset_flag": boolean;
    "map"?: string | null | undefined;
    "etiv_flag": boolean;
    "fwhm"?: number | null | undefined;
    "fwhm_src"?: number | null | undefined;
    "niters"?: number | null | undefined;
    "niters_src"?: number | null | undefined;
    "cortex_only": boolean;
    "mgz_flag": boolean;
    "no_jac_flag": boolean;
    "paired_diff_flag": boolean;
    "cache_out"?: string | null | undefined;
    "cache_in"?: string | null | undefined;
    "cache_out_only"?: string | null | undefined;
    "no_prune_flag": boolean;
    "mean_flag": boolean;
    "std_flag": boolean;
    "reshape_flag": boolean;
    "surfreg"?: string | null | undefined;
    "subjects_dir"?: string | null | undefined;
    "synth_flag": boolean;
    "tmpdir"?: string | null | undefined;
    "nocleanup_flag": boolean;
    "cleanup_flag": boolean;
    "log"?: string | null | undefined;
    "nolog_flag": boolean;
    "debug_flag": boolean;
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
        "mris_preproc": mris_preproc_cargs,
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
 * Output object returned when calling `mris_preproc(...)`.
 *
 * @interface
 */
interface MrisPreprocOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mris_preproc_params(
    outfile: string,
    target_subject: string,
    hemi: string,
    meas: string | null = null,
    label: string | null = null,
    measdir: string | null = null,
    subjects: Array<string> | null = null,
    fsgd: InputPathType | null = null,
    subjectlist: InputPathType | null = null,
    qdec: InputPathType | null = null,
    qdec_long: InputPathType | null = null,
    surfmeasfile: Array<InputPathType> | null = null,
    volmeasfile_reg: Array<string> | null = null,
    projfrac: number | null = null,
    projfrac_max: Array<number> | null = null,
    projfrac_avg: Array<number> | null = null,
    no_mask_non_cortex: boolean = false,
    session_file: InputPathType | null = null,
    dir_file: InputPathType | null = null,
    analysis: string | null = null,
    contrast: string | null = null,
    cvar_flag: boolean = false,
    offset_flag: boolean = false,
    map: string | null = null,
    etiv_flag: boolean = false,
    fwhm: number | null = null,
    fwhm_src: number | null = null,
    niters: number | null = null,
    niters_src: number | null = null,
    cortex_only: boolean = false,
    mgz_flag: boolean = false,
    no_jac_flag: boolean = false,
    paired_diff_flag: boolean = false,
    cache_out: string | null = null,
    cache_in: string | null = null,
    cache_out_only: string | null = null,
    no_prune_flag: boolean = false,
    mean_flag: boolean = false,
    std_flag: boolean = false,
    reshape_flag: boolean = false,
    surfreg: string | null = null,
    subjects_dir: string | null = null,
    synth_flag: boolean = false,
    tmpdir: string | null = null,
    nocleanup_flag: boolean = false,
    cleanup_flag: boolean = false,
    log: string | null = null,
    nolog_flag: boolean = false,
    debug_flag: boolean = false,
): MrisPreprocParameters {
    /**
     * Build parameters.
    
     * @param outfile Save output here.
     * @param target_subject Subject to use as the common-space. All input data will be resampled to the surface of this subject.
     * @param hemi Use hemisphere for source and target surfaces. Can be lh or rh.
     * @param meas Use subject/surf/hemi.surfmeasure as input. Implies --srcfmt curv.
     * @param label Look in label/hemi.annotname.(annot,mgz) and use mapmethod nnf.
     * @param measdir Look in subdir instead of surf.
     * @param subjects Specify an input subject on the command-line. All subjects must be specified in this way.
     * @param fsgd Specify the list of input subjects from the fsgd file.
     * @param subjectlist List all subjects separated by white space in subjlistfile.
     * @param qdec Specify list of subjects via qdec table file. Assumes the first column is the "fsid".
     * @param qdec_long Specify list of subjects via longitudinal qdec table file.
     * @param surfmeasfile Specify full path to input surface measure file.
     * @param volmeasfile_reg Specify full path to a volume file and its registration matrix file.
     * @param projfrac When sampling a volume onto the surface, sample a fraction of the thickness along the surface normal.
     * @param projfrac_max When sampling a volume onto the surface, find max along projection for vol2surf.
     * @param projfrac_avg Compute average along projection for vol2surf.
     * @param no_mask_non_cortex Do not mask out non-cortex in vol2surf.
     * @param session_file FS-FAST session file.
     * @param dir_file FS-FAST session directory file.
     * @param analysis FS-FAST analysis.
     * @param contrast FS-FAST contrast.
     * @param cvar_flag Use fsfast contrast variance (cesvar).
     * @param offset_flag Use fsfast mean offset (h-offset).
     * @param map Use fsfast contrast/map.
     * @param etiv_flag Divide each subject's value by the Estimated Total Intra Cranial Volume as found in aseg.stats.
     * @param fwhm Smooth by fwhm mm on the target surface.
     * @param fwhm_src Smooth by fwhm mm on the source surface.
     * @param niters Smooth by niters on the target surface.
     * @param niters_src Smooth by niters on the source surface.
     * @param cortex_only Exclude medial wall.
     * @param mgz_flag Use mgz format internally.
     * @param no_jac_flag Turn off jacobian correction.
     * @param paired_diff_flag Compute paired differences after concatenating all inputs together.
     * @param cache_out Cache the output in the specified cache file.
     * @param cache_in Use the pre-computed cached data from the specified cache file.
     * @param cache_out_only Cache data without actually creating an output.
     * @param no_prune_flag Do not prune the inputs.
     * @param mean_flag Compute the mean of all inputs.
     * @param std_flag Compute the standard deviation of all inputs.
     * @param reshape_flag Reshape spatial dimensions.
     * @param surfreg Use specified surface registration to the common space.
     * @param subjects_dir Set SUBJECTS_DIR environment variable.
     * @param synth_flag Synthesize the input data with white gaussian noise.
     * @param tmpdir Use specified temporary directory.
     * @param nocleanup_flag Do not delete temporary files.
     * @param cleanup_flag Delete temporary files (default).
     * @param log Specify log file.
     * @param nolog_flag Do not create a log file.
     * @param debug_flag Enable debug mode.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_preproc" as const,
        "outfile": outfile,
        "target_subject": target_subject,
        "hemi": hemi,
        "no_mask_non_cortex": no_mask_non_cortex,
        "cvar_flag": cvar_flag,
        "offset_flag": offset_flag,
        "etiv_flag": etiv_flag,
        "cortex_only": cortex_only,
        "mgz_flag": mgz_flag,
        "no_jac_flag": no_jac_flag,
        "paired_diff_flag": paired_diff_flag,
        "no_prune_flag": no_prune_flag,
        "mean_flag": mean_flag,
        "std_flag": std_flag,
        "reshape_flag": reshape_flag,
        "synth_flag": synth_flag,
        "nocleanup_flag": nocleanup_flag,
        "cleanup_flag": cleanup_flag,
        "nolog_flag": nolog_flag,
        "debug_flag": debug_flag,
    };
    if (meas !== null) {
        params["meas"] = meas;
    }
    if (label !== null) {
        params["label"] = label;
    }
    if (measdir !== null) {
        params["measdir"] = measdir;
    }
    if (subjects !== null) {
        params["subjects"] = subjects;
    }
    if (fsgd !== null) {
        params["fsgd"] = fsgd;
    }
    if (subjectlist !== null) {
        params["subjectlist"] = subjectlist;
    }
    if (qdec !== null) {
        params["qdec"] = qdec;
    }
    if (qdec_long !== null) {
        params["qdec_long"] = qdec_long;
    }
    if (surfmeasfile !== null) {
        params["surfmeasfile"] = surfmeasfile;
    }
    if (volmeasfile_reg !== null) {
        params["volmeasfile_reg"] = volmeasfile_reg;
    }
    if (projfrac !== null) {
        params["projfrac"] = projfrac;
    }
    if (projfrac_max !== null) {
        params["projfrac_max"] = projfrac_max;
    }
    if (projfrac_avg !== null) {
        params["projfrac_avg"] = projfrac_avg;
    }
    if (session_file !== null) {
        params["session_file"] = session_file;
    }
    if (dir_file !== null) {
        params["dir_file"] = dir_file;
    }
    if (analysis !== null) {
        params["analysis"] = analysis;
    }
    if (contrast !== null) {
        params["contrast"] = contrast;
    }
    if (map !== null) {
        params["map"] = map;
    }
    if (fwhm !== null) {
        params["fwhm"] = fwhm;
    }
    if (fwhm_src !== null) {
        params["fwhm_src"] = fwhm_src;
    }
    if (niters !== null) {
        params["niters"] = niters;
    }
    if (niters_src !== null) {
        params["niters_src"] = niters_src;
    }
    if (cache_out !== null) {
        params["cache_out"] = cache_out;
    }
    if (cache_in !== null) {
        params["cache_in"] = cache_in;
    }
    if (cache_out_only !== null) {
        params["cache_out_only"] = cache_out_only;
    }
    if (surfreg !== null) {
        params["surfreg"] = surfreg;
    }
    if (subjects_dir !== null) {
        params["subjects_dir"] = subjects_dir;
    }
    if (tmpdir !== null) {
        params["tmpdir"] = tmpdir;
    }
    if (log !== null) {
        params["log"] = log;
    }
    return params;
}


function mris_preproc_cargs(
    params: MrisPreprocParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_preproc");
    cargs.push(
        "--out",
        (params["outfile"] ?? null)
    );
    cargs.push(
        "--target",
        (params["target_subject"] ?? null)
    );
    cargs.push(
        "--hemi",
        (params["hemi"] ?? null)
    );
    if ((params["meas"] ?? null) !== null) {
        cargs.push(
            "--meas",
            (params["meas"] ?? null)
        );
    }
    if ((params["label"] ?? null) !== null) {
        cargs.push(
            "--label",
            (params["label"] ?? null)
        );
    }
    if ((params["measdir"] ?? null) !== null) {
        cargs.push(
            "--measdir",
            (params["measdir"] ?? null)
        );
    }
    if ((params["subjects"] ?? null) !== null) {
        cargs.push(
            "--s",
            ...(params["subjects"] ?? null)
        );
    }
    if ((params["fsgd"] ?? null) !== null) {
        cargs.push(
            "--fsgd",
            execution.inputFile((params["fsgd"] ?? null))
        );
    }
    if ((params["subjectlist"] ?? null) !== null) {
        cargs.push(
            "--f",
            execution.inputFile((params["subjectlist"] ?? null))
        );
    }
    if ((params["qdec"] ?? null) !== null) {
        cargs.push(
            "--qdec",
            execution.inputFile((params["qdec"] ?? null))
        );
    }
    if ((params["qdec_long"] ?? null) !== null) {
        cargs.push(
            "--qdec-long",
            execution.inputFile((params["qdec_long"] ?? null))
        );
    }
    if ((params["surfmeasfile"] ?? null) !== null) {
        cargs.push(
            "--is",
            ...(params["surfmeasfile"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["volmeasfile_reg"] ?? null) !== null) {
        cargs.push(
            "--iv",
            ...(params["volmeasfile_reg"] ?? null)
        );
    }
    if ((params["projfrac"] ?? null) !== null) {
        cargs.push(
            "--projfrac",
            String((params["projfrac"] ?? null))
        );
    }
    if ((params["projfrac_max"] ?? null) !== null) {
        cargs.push(
            "--projfrac-max",
            ...(params["projfrac_max"] ?? null).map(String)
        );
    }
    if ((params["projfrac_avg"] ?? null) !== null) {
        cargs.push(
            "--projfrac-avg",
            ...(params["projfrac_avg"] ?? null).map(String)
        );
    }
    if ((params["no_mask_non_cortex"] ?? null)) {
        cargs.push("--no-mask-non-cortex");
    }
    if ((params["session_file"] ?? null) !== null) {
        cargs.push(
            "--sf",
            execution.inputFile((params["session_file"] ?? null))
        );
    }
    if ((params["dir_file"] ?? null) !== null) {
        cargs.push(
            "--df",
            execution.inputFile((params["dir_file"] ?? null))
        );
    }
    if ((params["analysis"] ?? null) !== null) {
        cargs.push(
            "--analysis",
            (params["analysis"] ?? null)
        );
    }
    if ((params["contrast"] ?? null) !== null) {
        cargs.push(
            "--contrast",
            (params["contrast"] ?? null)
        );
    }
    if ((params["cvar_flag"] ?? null)) {
        cargs.push("--cvar");
    }
    if ((params["offset_flag"] ?? null)) {
        cargs.push("--offset");
    }
    if ((params["map"] ?? null) !== null) {
        cargs.push(
            "--map",
            (params["map"] ?? null)
        );
    }
    if ((params["etiv_flag"] ?? null)) {
        cargs.push("--etiv");
    }
    if ((params["fwhm"] ?? null) !== null) {
        cargs.push(
            "--fwhm",
            String((params["fwhm"] ?? null))
        );
    }
    if ((params["fwhm_src"] ?? null) !== null) {
        cargs.push(
            "--fwhm-src",
            String((params["fwhm_src"] ?? null))
        );
    }
    if ((params["niters"] ?? null) !== null) {
        cargs.push(
            "--niters",
            String((params["niters"] ?? null))
        );
    }
    if ((params["niters_src"] ?? null) !== null) {
        cargs.push(
            "--niters-src",
            String((params["niters_src"] ?? null))
        );
    }
    if ((params["cortex_only"] ?? null)) {
        cargs.push("--cortex-only");
    }
    if ((params["mgz_flag"] ?? null)) {
        cargs.push("--mgz");
    }
    if ((params["no_jac_flag"] ?? null)) {
        cargs.push("--no-jac");
    }
    if ((params["paired_diff_flag"] ?? null)) {
        cargs.push("--paired-diff");
    }
    if ((params["cache_out"] ?? null) !== null) {
        cargs.push(
            "--cache-out",
            (params["cache_out"] ?? null)
        );
    }
    if ((params["cache_in"] ?? null) !== null) {
        cargs.push(
            "--cache-in",
            (params["cache_in"] ?? null)
        );
    }
    if ((params["cache_out_only"] ?? null) !== null) {
        cargs.push(
            "--cache-out-only",
            (params["cache_out_only"] ?? null)
        );
    }
    if ((params["no_prune_flag"] ?? null)) {
        cargs.push("--no-prune");
    }
    if ((params["mean_flag"] ?? null)) {
        cargs.push("--mean");
    }
    if ((params["std_flag"] ?? null)) {
        cargs.push("--std");
    }
    if ((params["reshape_flag"] ?? null)) {
        cargs.push("--reshape");
    }
    if ((params["surfreg"] ?? null) !== null) {
        cargs.push(
            "--surfreg",
            (params["surfreg"] ?? null)
        );
    }
    if ((params["subjects_dir"] ?? null) !== null) {
        cargs.push(
            "--SUBJECTS_DIR",
            (params["subjects_dir"] ?? null)
        );
    }
    if ((params["synth_flag"] ?? null)) {
        cargs.push("--synth");
    }
    if ((params["tmpdir"] ?? null) !== null) {
        cargs.push(
            "--tmpdir",
            (params["tmpdir"] ?? null)
        );
    }
    if ((params["nocleanup_flag"] ?? null)) {
        cargs.push("--nocleanup");
    }
    if ((params["cleanup_flag"] ?? null)) {
        cargs.push("--cleanup");
    }
    if ((params["log"] ?? null) !== null) {
        cargs.push(
            "--log",
            (params["log"] ?? null)
        );
    }
    if ((params["nolog_flag"] ?? null)) {
        cargs.push("--nolog");
    }
    if ((params["debug_flag"] ?? null)) {
        cargs.push("--debug");
    }
    return cargs;
}


function mris_preproc_outputs(
    params: MrisPreprocParameters,
    execution: Execution,
): MrisPreprocOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisPreprocOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mris_preproc_execute(
    params: MrisPreprocParameters,
    execution: Execution,
): MrisPreprocOutputs {
    /**
     * Script to prepare surface-based data for high-level analysis by resampling surface or volume source data to a common subject and concatenating them into one file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisPreprocOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_preproc_cargs(params, execution)
    const ret = mris_preproc_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_preproc(
    outfile: string,
    target_subject: string,
    hemi: string,
    meas: string | null = null,
    label: string | null = null,
    measdir: string | null = null,
    subjects: Array<string> | null = null,
    fsgd: InputPathType | null = null,
    subjectlist: InputPathType | null = null,
    qdec: InputPathType | null = null,
    qdec_long: InputPathType | null = null,
    surfmeasfile: Array<InputPathType> | null = null,
    volmeasfile_reg: Array<string> | null = null,
    projfrac: number | null = null,
    projfrac_max: Array<number> | null = null,
    projfrac_avg: Array<number> | null = null,
    no_mask_non_cortex: boolean = false,
    session_file: InputPathType | null = null,
    dir_file: InputPathType | null = null,
    analysis: string | null = null,
    contrast: string | null = null,
    cvar_flag: boolean = false,
    offset_flag: boolean = false,
    map: string | null = null,
    etiv_flag: boolean = false,
    fwhm: number | null = null,
    fwhm_src: number | null = null,
    niters: number | null = null,
    niters_src: number | null = null,
    cortex_only: boolean = false,
    mgz_flag: boolean = false,
    no_jac_flag: boolean = false,
    paired_diff_flag: boolean = false,
    cache_out: string | null = null,
    cache_in: string | null = null,
    cache_out_only: string | null = null,
    no_prune_flag: boolean = false,
    mean_flag: boolean = false,
    std_flag: boolean = false,
    reshape_flag: boolean = false,
    surfreg: string | null = null,
    subjects_dir: string | null = null,
    synth_flag: boolean = false,
    tmpdir: string | null = null,
    nocleanup_flag: boolean = false,
    cleanup_flag: boolean = false,
    log: string | null = null,
    nolog_flag: boolean = false,
    debug_flag: boolean = false,
    runner: Runner | null = null,
): MrisPreprocOutputs {
    /**
     * Script to prepare surface-based data for high-level analysis by resampling surface or volume source data to a common subject and concatenating them into one file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param outfile Save output here.
     * @param target_subject Subject to use as the common-space. All input data will be resampled to the surface of this subject.
     * @param hemi Use hemisphere for source and target surfaces. Can be lh or rh.
     * @param meas Use subject/surf/hemi.surfmeasure as input. Implies --srcfmt curv.
     * @param label Look in label/hemi.annotname.(annot,mgz) and use mapmethod nnf.
     * @param measdir Look in subdir instead of surf.
     * @param subjects Specify an input subject on the command-line. All subjects must be specified in this way.
     * @param fsgd Specify the list of input subjects from the fsgd file.
     * @param subjectlist List all subjects separated by white space in subjlistfile.
     * @param qdec Specify list of subjects via qdec table file. Assumes the first column is the "fsid".
     * @param qdec_long Specify list of subjects via longitudinal qdec table file.
     * @param surfmeasfile Specify full path to input surface measure file.
     * @param volmeasfile_reg Specify full path to a volume file and its registration matrix file.
     * @param projfrac When sampling a volume onto the surface, sample a fraction of the thickness along the surface normal.
     * @param projfrac_max When sampling a volume onto the surface, find max along projection for vol2surf.
     * @param projfrac_avg Compute average along projection for vol2surf.
     * @param no_mask_non_cortex Do not mask out non-cortex in vol2surf.
     * @param session_file FS-FAST session file.
     * @param dir_file FS-FAST session directory file.
     * @param analysis FS-FAST analysis.
     * @param contrast FS-FAST contrast.
     * @param cvar_flag Use fsfast contrast variance (cesvar).
     * @param offset_flag Use fsfast mean offset (h-offset).
     * @param map Use fsfast contrast/map.
     * @param etiv_flag Divide each subject's value by the Estimated Total Intra Cranial Volume as found in aseg.stats.
     * @param fwhm Smooth by fwhm mm on the target surface.
     * @param fwhm_src Smooth by fwhm mm on the source surface.
     * @param niters Smooth by niters on the target surface.
     * @param niters_src Smooth by niters on the source surface.
     * @param cortex_only Exclude medial wall.
     * @param mgz_flag Use mgz format internally.
     * @param no_jac_flag Turn off jacobian correction.
     * @param paired_diff_flag Compute paired differences after concatenating all inputs together.
     * @param cache_out Cache the output in the specified cache file.
     * @param cache_in Use the pre-computed cached data from the specified cache file.
     * @param cache_out_only Cache data without actually creating an output.
     * @param no_prune_flag Do not prune the inputs.
     * @param mean_flag Compute the mean of all inputs.
     * @param std_flag Compute the standard deviation of all inputs.
     * @param reshape_flag Reshape spatial dimensions.
     * @param surfreg Use specified surface registration to the common space.
     * @param subjects_dir Set SUBJECTS_DIR environment variable.
     * @param synth_flag Synthesize the input data with white gaussian noise.
     * @param tmpdir Use specified temporary directory.
     * @param nocleanup_flag Do not delete temporary files.
     * @param cleanup_flag Delete temporary files (default).
     * @param log Specify log file.
     * @param nolog_flag Do not create a log file.
     * @param debug_flag Enable debug mode.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisPreprocOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_PREPROC_METADATA);
    const params = mris_preproc_params(outfile, target_subject, hemi, meas, label, measdir, subjects, fsgd, subjectlist, qdec, qdec_long, surfmeasfile, volmeasfile_reg, projfrac, projfrac_max, projfrac_avg, no_mask_non_cortex, session_file, dir_file, analysis, contrast, cvar_flag, offset_flag, map, etiv_flag, fwhm, fwhm_src, niters, niters_src, cortex_only, mgz_flag, no_jac_flag, paired_diff_flag, cache_out, cache_in, cache_out_only, no_prune_flag, mean_flag, std_flag, reshape_flag, surfreg, subjects_dir, synth_flag, tmpdir, nocleanup_flag, cleanup_flag, log, nolog_flag, debug_flag)
    return mris_preproc_execute(params, execution);
}


export {
      MRIS_PREPROC_METADATA,
      MrisPreprocOutputs,
      MrisPreprocParameters,
      mris_preproc,
      mris_preproc_params,
};
