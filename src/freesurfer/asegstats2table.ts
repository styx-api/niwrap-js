// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ASEGSTATS2TABLE_METADATA: Metadata = {
    id: "913ffe3689796073b891a61e20a937aa44732063.boutiques",
    name: "asegstats2table",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface Asegstats2tableParameters {
    "__STYXTYPE__": "asegstats2table";
    "subjects"?: Array<string> | null | undefined;
    "inputs"?: Array<string> | null | undefined;
    "tablefile": string;
    "subjectsfile"?: InputPathType | null | undefined;
    "qdec"?: InputPathType | null | undefined;
    "qdec_long"?: InputPathType | null | undefined;
    "fsgd"?: InputPathType | null | undefined;
    "maxsegno"?: Array<string> | null | undefined;
    "segids_from_file"?: InputPathType | null | undefined;
    "segno_include"?: Array<string> | null | undefined;
    "segno_exclude"?: Array<string> | null | undefined;
    "measure"?: string | null | undefined;
    "delimiter"?: string | null | undefined;
    "statsfile"?: string | null | undefined;
    "subdir"?: string | null | undefined;
    "scale"?: number | null | undefined;
    "write_etiv": boolean;
    "debug": boolean;
    "transpose_flag": boolean;
    "common_segs_flag": boolean;
    "all_segs_flag": boolean;
    "no_vol_extras_flag": boolean;
    "skip_missing_flag": boolean;
    "replace53_flag": boolean;
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
        "asegstats2table": asegstats2table_cargs,
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
        "asegstats2table": asegstats2table_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `asegstats2table(...)`.
 *
 * @interface
 */
interface Asegstats2tableOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The resulting table file with segmentation data.
     */
    output_table: OutputPathType;
}


function asegstats2table_params(
    tablefile: string,
    subjects: Array<string> | null = null,
    inputs: Array<string> | null = null,
    subjectsfile: InputPathType | null = null,
    qdec: InputPathType | null = null,
    qdec_long: InputPathType | null = null,
    fsgd: InputPathType | null = null,
    maxsegno: Array<string> | null = null,
    segids_from_file: InputPathType | null = null,
    segno_include: Array<string> | null = null,
    segno_exclude: Array<string> | null = null,
    measure: string | null = null,
    delimiter: string | null = null,
    statsfile: string | null = null,
    subdir: string | null = null,
    scale: number | null = null,
    write_etiv: boolean = false,
    debug: boolean = false,
    transpose_flag: boolean = false,
    common_segs_flag: boolean = false,
    all_segs_flag: boolean = false,
    no_vol_extras_flag: boolean = false,
    skip_missing_flag: boolean = false,
    replace53_flag: boolean = false,
): Asegstats2tableParameters {
    /**
     * Build parameters.
    
     * @param tablefile The output table file.
     * @param subjects List of subjects.
     * @param inputs List of input stat files.
     * @param subjectsfile Name of the file which has the list of subjects (one subject per line).
     * @param qdec Name of the qdec table which has the column of subjects ids (fsid).
     * @param qdec_long Name of the longitudinal qdec table with column of tp ids (fsid) and subject templates (fsid-base).
     * @param fsgd Name of the FSGD file to extract subjects from.
     * @param maxsegno Specify the maximum segmentation number.
     * @param segids_from_file Output only the segmentations present in the specified file.
     * @param segno_include Include only the specified segmentation IDs.
     * @param segno_exclude Exclude the specified segmentation IDs.
     * @param measure Measure to report: default is volume (alternative: mean, std).
     * @param delimiter Delimiter between measures in the table. Default is tab (alternative: comma, space, semicolon).
     * @param statsfile Use specified stats file instead of 'aseg.stats'.
     * @param subdir Use specified subdir instead of 'stats/'.
     * @param scale Scale factor for all values written to output file. Default is 1.
     * @param write_etiv Report volume as percent estimated total intracranial volume.
     * @param debug Increase verbosity for debugging purposes.
     * @param transpose_flag Transpose the table: subjects in columns and segmentations in rows.
     * @param common_segs_flag Output only the segmentations common to all stats files.
     * @param all_segs_flag Output all segmentations in the stats files given.
     * @param no_vol_extras_flag Do not include global volume measures like BrainSegVol.
     * @param skip_missing_flag Skip subjects that do not have a stats file.
     * @param replace53_flag Replace 5.3 structure names with later names.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "asegstats2table" as const,
        "tablefile": tablefile,
        "write_etiv": write_etiv,
        "debug": debug,
        "transpose_flag": transpose_flag,
        "common_segs_flag": common_segs_flag,
        "all_segs_flag": all_segs_flag,
        "no_vol_extras_flag": no_vol_extras_flag,
        "skip_missing_flag": skip_missing_flag,
        "replace53_flag": replace53_flag,
    };
    if (subjects !== null) {
        params["subjects"] = subjects;
    }
    if (inputs !== null) {
        params["inputs"] = inputs;
    }
    if (subjectsfile !== null) {
        params["subjectsfile"] = subjectsfile;
    }
    if (qdec !== null) {
        params["qdec"] = qdec;
    }
    if (qdec_long !== null) {
        params["qdec_long"] = qdec_long;
    }
    if (fsgd !== null) {
        params["fsgd"] = fsgd;
    }
    if (maxsegno !== null) {
        params["maxsegno"] = maxsegno;
    }
    if (segids_from_file !== null) {
        params["segids_from_file"] = segids_from_file;
    }
    if (segno_include !== null) {
        params["segno_include"] = segno_include;
    }
    if (segno_exclude !== null) {
        params["segno_exclude"] = segno_exclude;
    }
    if (measure !== null) {
        params["measure"] = measure;
    }
    if (delimiter !== null) {
        params["delimiter"] = delimiter;
    }
    if (statsfile !== null) {
        params["statsfile"] = statsfile;
    }
    if (subdir !== null) {
        params["subdir"] = subdir;
    }
    if (scale !== null) {
        params["scale"] = scale;
    }
    return params;
}


function asegstats2table_cargs(
    params: Asegstats2tableParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("asegstats2table");
    if ((params["subjects"] ?? null) !== null) {
        cargs.push(
            "--subjects",
            ...(params["subjects"] ?? null)
        );
    }
    if ((params["inputs"] ?? null) !== null) {
        cargs.push(
            "--inputs",
            ...(params["inputs"] ?? null)
        );
    }
    cargs.push(
        "--tablefile",
        (params["tablefile"] ?? null)
    );
    if ((params["subjectsfile"] ?? null) !== null) {
        cargs.push(
            "--subjectsfile",
            execution.inputFile((params["subjectsfile"] ?? null))
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
    if ((params["fsgd"] ?? null) !== null) {
        cargs.push(
            "--fsgd",
            execution.inputFile((params["fsgd"] ?? null))
        );
    }
    if ((params["maxsegno"] ?? null) !== null) {
        cargs.push(
            "--maxsegno",
            ...(params["maxsegno"] ?? null)
        );
    }
    if ((params["segids_from_file"] ?? null) !== null) {
        cargs.push(
            "--segids-from-file",
            execution.inputFile((params["segids_from_file"] ?? null))
        );
    }
    if ((params["segno_include"] ?? null) !== null) {
        cargs.push(
            "--segno",
            ...(params["segno_include"] ?? null)
        );
    }
    if ((params["segno_exclude"] ?? null) !== null) {
        cargs.push(
            "--no-segno",
            ...(params["segno_exclude"] ?? null)
        );
    }
    if ((params["measure"] ?? null) !== null) {
        cargs.push(
            "--meas",
            (params["measure"] ?? null)
        );
    }
    if ((params["delimiter"] ?? null) !== null) {
        cargs.push(
            "--delimiter",
            (params["delimiter"] ?? null)
        );
    }
    if ((params["statsfile"] ?? null) !== null) {
        cargs.push(
            "--statsfile",
            (params["statsfile"] ?? null)
        );
    }
    if ((params["subdir"] ?? null) !== null) {
        cargs.push(
            "--subdir",
            (params["subdir"] ?? null)
        );
    }
    if ((params["scale"] ?? null) !== null) {
        cargs.push(
            "--scale",
            String((params["scale"] ?? null))
        );
    }
    if ((params["write_etiv"] ?? null)) {
        cargs.push("--etiv");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("--debug");
    }
    if ((params["transpose_flag"] ?? null)) {
        cargs.push("--transpose");
    }
    if ((params["common_segs_flag"] ?? null)) {
        cargs.push("--common-segs");
    }
    if ((params["all_segs_flag"] ?? null)) {
        cargs.push("--all-segs");
    }
    if ((params["no_vol_extras_flag"] ?? null)) {
        cargs.push("--no-vol-extras");
    }
    if ((params["skip_missing_flag"] ?? null)) {
        cargs.push("--skip");
    }
    if ((params["replace53_flag"] ?? null)) {
        cargs.push("--replace53");
    }
    return cargs;
}


function asegstats2table_outputs(
    params: Asegstats2tableParameters,
    execution: Execution,
): Asegstats2tableOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Asegstats2tableOutputs = {
        root: execution.outputFile("."),
        output_table: execution.outputFile([(params["tablefile"] ?? null)].join('')),
    };
    return ret;
}


function asegstats2table_execute(
    params: Asegstats2tableParameters,
    execution: Execution,
): Asegstats2tableOutputs {
    /**
     * Converts a subcortical stats file created by recon-all and/or mri_segstats (e.g., aseg.stats) into a table.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Asegstats2tableOutputs`).
     */
    params = execution.params(params)
    const cargs = asegstats2table_cargs(params, execution)
    const ret = asegstats2table_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function asegstats2table(
    tablefile: string,
    subjects: Array<string> | null = null,
    inputs: Array<string> | null = null,
    subjectsfile: InputPathType | null = null,
    qdec: InputPathType | null = null,
    qdec_long: InputPathType | null = null,
    fsgd: InputPathType | null = null,
    maxsegno: Array<string> | null = null,
    segids_from_file: InputPathType | null = null,
    segno_include: Array<string> | null = null,
    segno_exclude: Array<string> | null = null,
    measure: string | null = null,
    delimiter: string | null = null,
    statsfile: string | null = null,
    subdir: string | null = null,
    scale: number | null = null,
    write_etiv: boolean = false,
    debug: boolean = false,
    transpose_flag: boolean = false,
    common_segs_flag: boolean = false,
    all_segs_flag: boolean = false,
    no_vol_extras_flag: boolean = false,
    skip_missing_flag: boolean = false,
    replace53_flag: boolean = false,
    runner: Runner | null = null,
): Asegstats2tableOutputs {
    /**
     * Converts a subcortical stats file created by recon-all and/or mri_segstats (e.g., aseg.stats) into a table.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param tablefile The output table file.
     * @param subjects List of subjects.
     * @param inputs List of input stat files.
     * @param subjectsfile Name of the file which has the list of subjects (one subject per line).
     * @param qdec Name of the qdec table which has the column of subjects ids (fsid).
     * @param qdec_long Name of the longitudinal qdec table with column of tp ids (fsid) and subject templates (fsid-base).
     * @param fsgd Name of the FSGD file to extract subjects from.
     * @param maxsegno Specify the maximum segmentation number.
     * @param segids_from_file Output only the segmentations present in the specified file.
     * @param segno_include Include only the specified segmentation IDs.
     * @param segno_exclude Exclude the specified segmentation IDs.
     * @param measure Measure to report: default is volume (alternative: mean, std).
     * @param delimiter Delimiter between measures in the table. Default is tab (alternative: comma, space, semicolon).
     * @param statsfile Use specified stats file instead of 'aseg.stats'.
     * @param subdir Use specified subdir instead of 'stats/'.
     * @param scale Scale factor for all values written to output file. Default is 1.
     * @param write_etiv Report volume as percent estimated total intracranial volume.
     * @param debug Increase verbosity for debugging purposes.
     * @param transpose_flag Transpose the table: subjects in columns and segmentations in rows.
     * @param common_segs_flag Output only the segmentations common to all stats files.
     * @param all_segs_flag Output all segmentations in the stats files given.
     * @param no_vol_extras_flag Do not include global volume measures like BrainSegVol.
     * @param skip_missing_flag Skip subjects that do not have a stats file.
     * @param replace53_flag Replace 5.3 structure names with later names.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Asegstats2tableOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ASEGSTATS2TABLE_METADATA);
    const params = asegstats2table_params(tablefile, subjects, inputs, subjectsfile, qdec, qdec_long, fsgd, maxsegno, segids_from_file, segno_include, segno_exclude, measure, delimiter, statsfile, subdir, scale, write_etiv, debug, transpose_flag, common_segs_flag, all_segs_flag, no_vol_extras_flag, skip_missing_flag, replace53_flag)
    return asegstats2table_execute(params, execution);
}


export {
      ASEGSTATS2TABLE_METADATA,
      Asegstats2tableOutputs,
      Asegstats2tableParameters,
      asegstats2table,
      asegstats2table_params,
};
