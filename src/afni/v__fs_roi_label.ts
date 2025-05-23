// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__FS_ROI_LABEL_METADATA: Metadata = {
    id: "a7302764b06fe1cdcf5b431a5db63243d5a576e3.boutiques",
    name: "@FS_roi_label",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VFsRoiLabelParameters {
    "__STYXTYPE__": "@FS_roi_label";
    "label_int"?: number | null | undefined;
    "lab_flag"?: number | null | undefined;
    "rank_int"?: number | null | undefined;
    "rankmap_file"?: InputPathType | null | undefined;
    "name"?: string | null | undefined;
    "labeltable_file"?: InputPathType | null | undefined;
    "surf_annot_cmap"?: InputPathType | null | undefined;
    "slab_int"?: number | null | undefined;
    "sname_name"?: string | null | undefined;
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
        "@FS_roi_label": v__fs_roi_label_cargs,
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
 * Output object returned when calling `v__fs_roi_label(...)`.
 *
 * @interface
 */
interface VFsRoiLabelOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v__fs_roi_label_params(
    label_int: number | null = null,
    lab_flag: number | null = null,
    rank_int: number | null = null,
    rankmap_file: InputPathType | null = null,
    name: string | null = null,
    labeltable_file: InputPathType | null = null,
    surf_annot_cmap: InputPathType | null = null,
    slab_int: number | null = null,
    sname_name: string | null = null,
): VFsRoiLabelParameters {
    /**
     * Build parameters.
    
     * @param label_int Integer labeled area in FreeSurfer's parcellation.
     * @param lab_flag Return the name of an integer labeled area in FreeSurfer's parcellation.
     * @param rank_int Return the name of ranked integer labeled area from the output of 3dRank or 3dmerge -1rank.
     * @param rankmap_file Path to the rank map file.
     * @param name Return entries matching NAME (case insensitive, partial match) from FreeSurfer's FreeSurferColorLUT.txt.
     * @param labeltable_file Path to the label table file.
     * @param surf_annot_cmap CMAP file output by FSread_annot's -roi_1D option.
     * @param slab_int Return the name of an integer labeled area in FreeSurfer's surface-based annotation.
     * @param sname_name Return the entries matching NAME (case insensitive, partial match) from the CMAP file.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@FS_roi_label" as const,
    };
    if (label_int !== null) {
        params["label_int"] = label_int;
    }
    if (lab_flag !== null) {
        params["lab_flag"] = lab_flag;
    }
    if (rank_int !== null) {
        params["rank_int"] = rank_int;
    }
    if (rankmap_file !== null) {
        params["rankmap_file"] = rankmap_file;
    }
    if (name !== null) {
        params["name"] = name;
    }
    if (labeltable_file !== null) {
        params["labeltable_file"] = labeltable_file;
    }
    if (surf_annot_cmap !== null) {
        params["surf_annot_cmap"] = surf_annot_cmap;
    }
    if (slab_int !== null) {
        params["slab_int"] = slab_int;
    }
    if (sname_name !== null) {
        params["sname_name"] = sname_name;
    }
    return params;
}


function v__fs_roi_label_cargs(
    params: VFsRoiLabelParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@FS_roi_label");
    if ((params["label_int"] ?? null) !== null) {
        cargs.push(String((params["label_int"] ?? null)));
    }
    if ((params["lab_flag"] ?? null) !== null) {
        cargs.push(
            "-lab",
            String((params["lab_flag"] ?? null))
        );
    }
    if ((params["rank_int"] ?? null) !== null) {
        cargs.push(
            "-rank",
            String((params["rank_int"] ?? null))
        );
    }
    if ((params["rankmap_file"] ?? null) !== null) {
        cargs.push(
            "-rankmap",
            execution.inputFile((params["rankmap_file"] ?? null))
        );
    }
    if ((params["name"] ?? null) !== null) {
        cargs.push(
            "-name",
            (params["name"] ?? null)
        );
    }
    if ((params["labeltable_file"] ?? null) !== null) {
        cargs.push(
            "-labeltable",
            execution.inputFile((params["labeltable_file"] ?? null))
        );
    }
    if ((params["surf_annot_cmap"] ?? null) !== null) {
        cargs.push(
            "-surf_annot_cmap",
            execution.inputFile((params["surf_annot_cmap"] ?? null))
        );
    }
    if ((params["slab_int"] ?? null) !== null) {
        cargs.push(
            "-slab",
            String((params["slab_int"] ?? null))
        );
    }
    if ((params["sname_name"] ?? null) !== null) {
        cargs.push(
            "-sname",
            (params["sname_name"] ?? null)
        );
    }
    return cargs;
}


function v__fs_roi_label_outputs(
    params: VFsRoiLabelParameters,
    execution: Execution,
): VFsRoiLabelOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VFsRoiLabelOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v__fs_roi_label_execute(
    params: VFsRoiLabelParameters,
    execution: Execution,
): VFsRoiLabelOutputs {
    /**
     * Tool to get labels associated with FreeSurfer's parcellation and annotation files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VFsRoiLabelOutputs`).
     */
    params = execution.params(params)
    const cargs = v__fs_roi_label_cargs(params, execution)
    const ret = v__fs_roi_label_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__fs_roi_label(
    label_int: number | null = null,
    lab_flag: number | null = null,
    rank_int: number | null = null,
    rankmap_file: InputPathType | null = null,
    name: string | null = null,
    labeltable_file: InputPathType | null = null,
    surf_annot_cmap: InputPathType | null = null,
    slab_int: number | null = null,
    sname_name: string | null = null,
    runner: Runner | null = null,
): VFsRoiLabelOutputs {
    /**
     * Tool to get labels associated with FreeSurfer's parcellation and annotation files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param label_int Integer labeled area in FreeSurfer's parcellation.
     * @param lab_flag Return the name of an integer labeled area in FreeSurfer's parcellation.
     * @param rank_int Return the name of ranked integer labeled area from the output of 3dRank or 3dmerge -1rank.
     * @param rankmap_file Path to the rank map file.
     * @param name Return entries matching NAME (case insensitive, partial match) from FreeSurfer's FreeSurferColorLUT.txt.
     * @param labeltable_file Path to the label table file.
     * @param surf_annot_cmap CMAP file output by FSread_annot's -roi_1D option.
     * @param slab_int Return the name of an integer labeled area in FreeSurfer's surface-based annotation.
     * @param sname_name Return the entries matching NAME (case insensitive, partial match) from the CMAP file.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VFsRoiLabelOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__FS_ROI_LABEL_METADATA);
    const params = v__fs_roi_label_params(label_int, lab_flag, rank_int, rankmap_file, name, labeltable_file, surf_annot_cmap, slab_int, sname_name)
    return v__fs_roi_label_execute(params, execution);
}


export {
      VFsRoiLabelOutputs,
      VFsRoiLabelParameters,
      V__FS_ROI_LABEL_METADATA,
      v__fs_roi_label,
      v__fs_roi_label_params,
};
